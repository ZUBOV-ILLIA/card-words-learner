import { v4 as uuidv4 } from "uuid";

export type Word = {
  id: string;
  native: string;
  foreign: string;
  example: string;
};

export type WordsList = Word[];

const mockWords: WordsList = [
  {
    id: "1",
    native: "река",
    foreign: "river",
    example: "The river flows through the mountains.",
  },
  {
    id: "2",
    native: "медведь",
    foreign: "bear",
    example: "The bear is a strong and powerful animal.",
  },
  {
    id: "3",
    native: "заяц",
    foreign: "hare",
    example: "The hare runs quickly through the forest.",
  },
  {
    id: "4",
    native: "лодка",
    foreign: "boat",
    example: "The boat sails across the calm lake.",
  },
  {
    id: "5",
    native: "дерево",
    foreign: "tree",
    example: "The tree provides shade in the summer.",
  },
  {
    id: "6",
    native: "гора",
    foreign: "mountain",
    example: "The mountain stands tall and majestic.",
  },
  {
    id: "7",
    native: "рыба",
    foreign: "fish",
    example: "The fish swims swiftly in the river.",
  },
  {
    id: "8",
    native: "лес",
    foreign: "forest",
    example: "The forest is full of tall trees and wild animals.",
  },
  {
    id: "9",
    native: "волк",
    foreign: "wolf",
    example: "The wolf howls at the moon in the night.",
  },
  {
    id: "10",
    native: "звезда",
    foreign: "star",
    example: "The stars twinkle brightly in the night sky.",
  },
  {
    id: "11",
    native: "птица",
    foreign: "bird",
    example: "The bird sings a beautiful melody in the morning.",
  },
  {
    id: "12",
    native: "солнечный свет",
    foreign: "sunlight",
    example: "The sunlight warms the earth.",
  },
  {
    id: "13",
    native: "ветер",
    foreign: "wind",
    example: "The wind blows gently through the fields.",
  },
];

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

export async function addMockedWords() {
  try {
    const wordsList: WordsList = await getWordsList();

    wordsList.push(...mockWords.map((el) => ({ ...el, id: uuidv4() })));

    localStorage.setItem("wordsList", JSON.stringify(wordsList));
  } catch (error) {
    console.error("Error adding mocked words:", error);
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
