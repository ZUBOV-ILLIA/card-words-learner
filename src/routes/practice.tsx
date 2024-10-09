import { useEffect, useState } from "react";
import { getWordsList, WordsList } from "../api/apiWords";
import RandomCard from "../components/RandomCard";

export default function Practice() {
  const [randomWordsList, setRandomWordsList] = useState<WordsList | []>([]);
  const [needToShuffleWords, setNeedToShuffleWords] = useState(false);

  useEffect(() => {
    (async () => {
      console.log("inside");

      let words = await getWordsList();

      words = randomizeArray(words);

      console.log(words);
      setRandomWordsList(words);
    })();

    setNeedToShuffleWords(false);
  }, [needToShuffleWords]);

  function randomizeArray(arr: WordsList) {
    return arr.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="relative flex flex-col justify-center items-center grow w-full rounded-lg overflow-hidden">
      {!needToShuffleWords &&
        randomWordsList.length > 0 &&
        randomWordsList.map((word) => <RandomCard key={word.id} word={word} />)}

      <button
        className="py-3 px-6 text-white bg-sky-500 rounded-full"
        onClick={() => setNeedToShuffleWords(true)}
      >
        Перемешать карточки
      </button>
    </div>
  );
}
