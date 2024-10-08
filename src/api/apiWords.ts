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
  const wordsList: WordsList = await getWordsList();

  wordsList.push(word);
  localStorage.setItem("wordsList", JSON.stringify(wordsList));
}
