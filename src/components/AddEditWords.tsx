import { useState } from "react";
import { createPortal } from "react-dom";
import plusIcon from "/plus.svg";
import checkIcon from "/check.svg";
import trashIcon from "/trash.svg";
import { Word } from "../api/apiWords";

export default function AddEditWords({
  word,
  children,
}: {
  word?: Word;
  children?: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [foreignWord, setForeignWord] = useState(
    word?.foreign ? word.foreign : ""
  );
  const [nativeWord, setNativeWord] = useState(word?.native ? word.native : "");
  const [example, setExample] = useState(word?.example ? word.example : "");

  return (
    <>
      {children ? (
        <div
          className="py-1 px-2 text-white bg-sky-500/10 rounded-lg mb-2 shadow shadow-white/25"
          onClick={() => setIsModalOpen(true)}
        >
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
          <Modal>
            <div
              className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
              onClick={() => setIsModalOpen(false)}
            />
            <div className="w-11/12 flex flex-col bg-white p-4 rounded-lg z-10">
              <input
                type="text"
                name="foreign-word"
                placeholder="Слово на иностранном языке *"
                className="mb-4 p-2 w-full border border-gray-300 rounded-md"
                onChange={(e) => setForeignWord(e.target.value)}
                value={foreignWord}
                autoFocus={true}
              />

              <input
                type="text"
                name="native-word"
                placeholder="Слово на вашем языке *"
                className="mb-4 p-2 w-full border border-gray-300 rounded-md"
                onChange={(e) => setNativeWord(e.target.value)}
                value={nativeWord}
              />

              <textarea
                name="example"
                placeholder="Пример использования"
                className="mb-4 p-2 h-36 w-full border border-gray-300 rounded-md resize-none"
                onChange={(e) => setExample(e.target.value)}
                value={example}
              />

              <div className="flex justify-end">
                <div className="p-2 mr-auto">
                  <img
                    src={trashIcon}
                    alt="plus"
                    className="w-9 h-9"
                    onClick={() => {
                      setIsModalOpen(false);
                    }}
                  />
                </div>

                <div className="p-2">
                  <div className="rounded-full bg-red-600">
                    <img
                      src={plusIcon}
                      alt="plus"
                      className="w-9 h-9 rotate-45"
                      onClick={() => setIsModalOpen(false)}
                    />
                  </div>
                </div>

                <div className="p-2">
                  <img
                    src={checkIcon}
                    alt="plus"
                    className="w-9 h-9"
                    onClick={() => {
                      setIsModalOpen(false);
                    }}
                  />
                </div>
              </div>
            </div>
          </Modal>,
          document.body
        )}
    </>
  );
}

function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      {children}
    </div>
  );
}
