import { useState } from "react";
import { deleteWord, Word } from "../api/apiWords";
import trashIcon from "/trash.svg";
import editIcon from "/edit.svg";
import checkIcon from "/check.svg";
import AddEditWords from "./AddEditWords";

interface Props {
  word: Word;
}

export default function RandomCard({ word }: Props) {
  const [showCard, setShowCard] = useState(true);
  const [showTranslation, setShowTranslation] = useState(false);

  function handleNextWord() {
    setShowCard(false);
  }

  async function handleDeleteWord() {
    await deleteWord(word.id);

    setShowCard(false);
  }

  return (
    <>
      {showCard && (
        <div
          key={word.id}
          className="absolute top-0 left-0 p-3 h-full w-full flex flex-col items-center justify-between bg-sky-200"
        >
          {!showTranslation && (
            <div
              className="absolute top-0 left-0 h-full w-full"
              onClick={() => setShowTranslation(true)}
            />
          )}
          <span className="font-bold text-2xl">{word.foreign}</span>
          <span className="text-xl">{showTranslation && word.native}</span>
          <span className="italic font-thin text-gray-600">
            {showTranslation && word.example}
          </span>

          <div className="w-full flex z-10">
            <div className="p-2 mr-auto transition-shadow active:shadow-md rounded-lg">
              <img
                src={trashIcon}
                alt="delete"
                className="w-9 h-9"
                onClick={handleDeleteWord}
              />
            </div>

            <AddEditWords className="mr-2" word={word}>
              <div className="p-2 mr-auto transition-shadow active:shadow-md rounded-lg">
                <img src={editIcon} alt="edit" className="w-9 h-9" />
              </div>
            </AddEditWords>

            <div className="p-2 relative transition-shadow rounded-lg">
              <img
                src={checkIcon}
                alt="next"
                className="w-9 h-9"
                onClick={handleNextWord}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
