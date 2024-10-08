import { useEffect, useState } from "react";
import { getWordsList, WordsList } from "../api/apiWords";
import RandomCard from "../components/RandomCard";

export default function Practice() {
  const [randomWordsList, setRandomWordsList] = useState<WordsList | []>([]);

  useEffect(() => {
    (async () => {
      let words = await getWordsList();

      words = randomizeArray(words);

      console.log(words);
      setRandomWordsList(words);
    })();
  }, []);

  function randomizeArray(arr: WordsList) {
    return arr.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="relative flex flex-col grow w-full rounded-lg overflow-hidden">
      {randomWordsList.length > 0 &&
        randomWordsList.map((word) => <RandomCard key={word.id} word={word} />)}
    </div>
  );
}
