import AddEditWords from "../components/AddEditWords";

const words = [
  {
    id: "1",
    native: "привет",
    foreign: "hello",
    example: "Hello, world!",
  },
  {
    id: "2",
    native: "пока",
    foreign: "goodbye",
    example: "Goodbye, world!",
  },
  {
    id: "3",
    native: "спасибо",
    foreign: "thank you",
    example: "Thank you for your help!",
  },
  {
    id: "4",
    native: "добрый день",
    foreign: "good morning",
    example: "Good morning, world!",
  },
  {
    id: "5",
    native: "добрый вечер",
    foreign: "good evening",
    example: "Good evening, world!",
  },
  {
    id: "6",
    native: "доброй ночи",
    foreign: "good night",
    example: "Good night, world!",
  },
  {
    id: "7",
    native: "путь",
    foreign: "path",
    example: "The path to success is difficult to find.",
  },
  {
    id: "8",
    native: "путешествие",
    foreign: "journey",
    example: "A journey of a thousand miles begins with a single step.",
  },
  {
    id: "9",
    native: "приветствие",
    foreign: "greeting",
    example: "Greetings from Earth!",
  },
  {
    id: "10",
    native: "приветствие",
    foreign: "greeting",
    example: "Greetings from Earth!",
  },
  {
    id: "11",
    native: "приветствие",
    foreign: "greeting",
    example: "Greetings from Earth!",
  },
  {
    id: "12",
    native: "приветствие",
    foreign: "greeting",
    example: "Greetings from Earth!",
  },
  {
    id: "13",
    native: "приветствие",
    foreign: "greeting",
    example: "Greetings from Earth!",
  },
];

export default function Words() {
  return (
    <section className="">
      {words.length === 0 && (
        <p className="text-gray-400 font-thin text-center">Давай добавим слова для изучения</p>
      )}

      {words.length > 0 && words.map((word) => (
        <div
          key={word.id}
          className="py-1 px-2 text-white bg-sky-500/10 rounded-lg mb-2 shadow shadow-white/25"
          
        >
          <p className="font-bold">{word.foreign}</p>
          <p className="">{word.native}</p>
          <p className="text-gray-400 font-thin">{word.example}</p>
        </div>
      ))}

      <div className="fixed bottom-20 right-3">
        <AddEditWords />
      </div>
    </section>
  )
}
