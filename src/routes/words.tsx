import { useEffect, useState } from "react";
import AddEditWords from "../components/AddEditWords";
import { getWordsList, Word } from "../api/apiWords";

// const words = [
//   {
//     id: "1",
//     native: "река",
//     foreign: "river",
//     example: "The river flows through the mountains.",
//   },
//   {
//     id: "2",
//     native: "медведь",
//     foreign: "bear",
//     example: "The bear is a strong and powerful animal.",
//   },
//   {
//     id: "3",
//     native: "заяц",
//     foreign: "hare",
//     example: "The hare runs quickly through the forest.",
//   },
//   {
//     id: "4",
//     native: "лодка",
//     foreign: "boat",
//     example: "The boat sails across the calm lake.",
//   },
//   {
//     id: "5",
//     native: "дерево",
//     foreign: "tree",
//     example: "The tree provides shade in the summer.",
//   },
//   {
//     id: "6",
//     native: "гора",
//     foreign: "mountain",
//     example: "The mountain stands tall and majestic.",
//   },
//   {
//     id: "7",
//     native: "рыба",
//     foreign: "fish",
//     example: "The fish swims swiftly in the river.",
//   },
//   {
//     id: "8",
//     native: "лес",
//     foreign: "forest",
//     example: "The forest is full of tall trees and wild animals.",
//   },
//   {
//     id: "9",
//     native: "волк",
//     foreign: "wolf",
//     example: "The wolf howls at the moon in the night.",
//   },
//   {
//     id: "10",
//     native: "звезда",
//     foreign: "star",
//     example: "The stars twinkle brightly in the night sky.",
//   },
//   {
//     id: "11",
//     native: "птица",
//     foreign: "bird",
//     example: "The bird sings a beautiful melody in the morning.",
//   },
//   {
//     id: "12",
//     native: "солнечный свет",
//     foreign: "sunlight",
//     example: "The sunlight warms the earth.",
//   },
//   {
//     id: "13",
//     native: "ветер",
//     foreign: "wind",
//     example: "The wind blows gently through the fields.",
//   },
// ];

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

  return (
    <section className="">
      {words.length === 0 && (
        <p className="text-gray-400 font-thin text-center">
          Давай добавим слова для изучения
        </p>
      )}

      {words.length > 0 &&
        words.map((word) => (
          <AddEditWords
            key={word.id}
            word={word}
            needUpdate={setNeedUpdate}
            className="py-1 px-2 text-white bg-sky-500/10 rounded-lg mb-2 shadow shadow-white/25"
          >
            <p className="font-bold">{word.foreign}</p>
            <p className="">{word.native}</p>
            <p className="text-gray-400 font-thin italic">{word.example}</p>
          </AddEditWords>
        ))}

      <div className="fixed bottom-20 right-3">
        <AddEditWords
          needUpdate={setNeedUpdate}
          className="py-1 px-2 text-white bg-sky-500/10 rounded-lg mb-2 shadow shadow-white/25"
        />
      </div>
    </section>
  );
}
