import { v4 as uuidv4 } from "uuid";

export type Word = {
  id: string;
  native: string;
  foreign: string;
  example: string;
};

export type WordsList = Word[];

export async function getWordsList(): Promise<WordsList | []> {
  const storedWords = await localStorage.getItem("wordsList");

  return storedWords ? JSON.parse(storedWords) : [];
}

export async function addWord(word: Word) {
  try {
    const wordsList: WordsList = await getWordsList();

    wordsList.push({
      ...word,
      id: !word.id ? uuidv4() : word.id,
    });

    localStorage.setItem("wordsList", JSON.stringify(wordsList));
  } catch (error) {
    console.error("Error adding the word:", error);
  }
}

export async function updateWord(word: Word) {
  try {
    const wordsList: WordsList = await getWordsList();
    const index = wordsList.findIndex((item) => item.id === word.id);

    if (index === -1) {
      console.warn(`Word with ID ${word.id} not found`);
      return;
    }

    wordsList[index] = word;

    localStorage.setItem("wordsList", JSON.stringify(wordsList));
  } catch (error) {
    console.error("Error updating the word:", error);
  }
}

export async function deleteWord(id: string) {
  try {
    const wordsList: WordsList = await getWordsList();

    const newWordsList = wordsList.filter((word) => word.id !== id);

    localStorage.setItem("wordsList", JSON.stringify(newWordsList));
  } catch (error) {
    console.error("Error deleting the word:", error);
  }
}
