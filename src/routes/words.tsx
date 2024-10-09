import { useEffect, useState } from "react";
import AddEditWords from "../components/AddEditWords";
import {
  deleteWord,
  getWordsList,
  Word,
  // addMockedWords,
} from "../api/apiWords";
import trashIcon from "/trash.svg";
import editIcon from "/edit.svg";

export default function Words() {
  const [words, setWords] = useState<Word[]>([]);
  const [needUpdate, setNeedUpdate] = useState(true);

  useEffect(() => {
    if (needUpdate) {
      (async function () {
        const wordsList = await getWordsList();
        setWords(wordsList);
      })();

      setNeedUpdate(false);
    }
  }, [needUpdate]);

  async function handleDeleteWord(word: Word) {
    if (word) {
      await deleteWord(word.id);
    }

    setNeedUpdate(true);
  }

  // async function handleAddMockedWords() {
  //   await addMockedWords();
  //   setNeedUpdate(true);
  // }

  return (
    <section className="mb-11">
      {words.length === 0 && (
        <p className="text-gray-400 font-thin text-center">
          Давай добавим слова для изучения
        </p>
      )}

      {words.length > 0 &&
        words.map((word) => (
          <div
            key={word.id}
            className="mb-2 py-1 px-2 flex bg-white rounded-lg shadow-md"
          >
            <div className="grow">
              <p className="font-bold">{word.foreign}</p>
              <hr />
              <p className="">{word.native}</p>
              <p className="text-gray-500 italic">{word.example}</p>
            </div>
            <div>
              <div className="w-12 h-12 flex justify-center items-center transition-shadow active:shadow-md rounded-lg">
                <img
                  src={trashIcon}
                  alt="delete"
                  className="w-6 h-6"
                  onClick={() => handleDeleteWord(word)}
                />
              </div>

              <AddEditWords word={word} needUpdate={setNeedUpdate}>
                <div className="w-9 h-9 flex justify-center items-center transition-shadow active:shadow-md rounded-lg">
                  <img src={editIcon} alt="edit" className="w-5 h-5" />
                </div>
              </AddEditWords>
            </div>
          </div>
        ))}

      <div className="fixed bottom-20 right-3">
        <AddEditWords
          needUpdate={setNeedUpdate}
          className="py-1 px-2 text-white bg-sky-500/10 rounded-lg mb-2 shadow shadow-white/25"
        />
      </div>

      {/* <div
        className="fixed bottom-20 left-3 p-3 text-white bg-sky-500 rounded-full uppercase"
        onClick={handleAddMockedWords}
      >
        generate
      </div> */}

      <div className="fixed bottom-14 left-0 h-3 w-full bg-gradient-to-t from-slate-200 from-20%"></div>
    </section>
  );
}
