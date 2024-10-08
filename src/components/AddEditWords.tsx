import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import plusIcon from "/plus.svg";
import checkIcon from "/check.svg";
import trashIcon from "/trash.svg";
import { addWord, deleteWord, updateWord, Word } from "../api/apiWords";
import CustomInput from "./CustomInput";

export default function AddEditWords({
  word,
  children,
  className,
  needUpdate,
}: {
  word?: Word;
  children?: React.ReactNode;
  className?: string;
  needUpdate?: (arg: boolean) => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [foreignWord, setForeignWord] = useState(
    word?.foreign ? word.foreign : ""
  );
  const [nativeWord, setNativeWord] = useState(word?.native ? word.native : "");
  const [example, setExample] = useState(word?.example ? word.example : "");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(!foreignWord || !nativeWord);
  }, [foreignWord, nativeWord]);

  async function handleAddChangeWord() {
    if (!foreignWord || !nativeWord) {
      setHasError(true);
      return;
    }

    setHasError(false);

    if (!children) {
      await addWord({
        id: "",
        native: nativeWord,
        foreign: foreignWord,
        example,
      });
    } else {
      if (word) {
        if (word.foreign === foreignWord && word.native === nativeWord) {
          setIsModalOpen(false);

          return;
        }

        await updateWord({
          id: word?.id,
          native: nativeWord,
          foreign: foreignWord,
          example,
        });
      }
    }

    setIsModalOpen(false);

    setForeignWord("");
    setNativeWord("");
    setExample("");

    if (needUpdate) {
      needUpdate(true);
    }
  }

  async function handleDeleteWord() {
    if (word) {
      await deleteWord(word.id);
    }

    setIsModalOpen(false);

    if (needUpdate) {
      needUpdate(true);
    }
  }

  return (
    <>
      {children ? (
        <div className={className} onClick={() => setIsModalOpen(true)}>
          {children}
        </div>
      ) : (
        <span
          className="inline-block rounded-full border bg-slate-500 active:bg-slate-700 shadow-md"
          onClick={() => setIsModalOpen(true)}
        >
          <img src={plusIcon} alt="plus" className="w-11 h-11" />
        </span>
      )}

      {isModalOpen &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
            <div
              className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
              onClick={() => setIsModalOpen(false)}
            />
            <div className="w-11/12 flex flex-col bg-white p-4 rounded-lg z-10">
              <CustomInput
                name="foreign-word"
                placeholder="Слово на иностранном языке *"
                customClass="mb-4"
                value={foreignWord}
                onChange={setForeignWord}
                required
                autofocus
              />

              <CustomInput
                name="native-word"
                placeholder="Слово на вашем языке *"
                customClass="mb-4"
                value={nativeWord}
                onChange={setNativeWord}
                required
              />

              <CustomInput
                name="example"
                placeholder="Пример использования"
                customClass="mb-4"
                value={example}
                onChange={setExample}
              />

              <div className="flex justify-end">
                {children && (
                  <div className="p-2 mr-auto transition-shadow active:shadow-md rounded-lg">
                    <img
                      src={trashIcon}
                      alt="plus"
                      className="w-9 h-9"
                      onClick={handleDeleteWord}
                    />
                  </div>
                )}

                <div className="p-2 transition-shadow active:shadow-md rounded-lg">
                  <div className="rounded-full bg-red-600">
                    <img
                      src={plusIcon}
                      alt="cancel"
                      className="w-9 h-9 rotate-45"
                      onClick={() => setIsModalOpen(false)}
                    />
                  </div>
                </div>

                <div
                  className={`p-2 relative transition-shadow rounded-lg ${
                    hasError ? "" : "active:shadow-md"
                  }`}
                >
                  <img
                    src={checkIcon}
                    alt="ok"
                    className={`w-9 h-9 ${hasError ? "opacity-50" : ""}`}
                    onClick={() => handleAddChangeWord()}
                  />
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
