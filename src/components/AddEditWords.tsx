import { useState } from "react";
import { createPortal } from 'react-dom';
import plusIcon from "/plus.svg";
import checkIcon from "/check.svg";

export default function AddEditWords() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <span
        className="inline-block rounded-full border bg-slate-500 active:bg-slate-700 shadow-md"
        onClick={() => setIsModalOpen(true)}
      >
        <img src={plusIcon} alt="plus" className="w-11 h-11" />
      </span>

      {isModalOpen && createPortal(<Modal toggle={setIsModalOpen} />, document.body)}
      {/* {createPortal(<Modal toggle={setIsModalOpen} />, document.body)} */}
    </>
  )
}

function Modal({ toggle }: { toggle: (value: boolean) => void }) {

  return (
    <div  className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={() => toggle(false)}
      />
      <div
        className="w-11/12 bg-white p-4 rounded-lg z-10"
      >
        

        <div >
          <input
            type="text"
            name=""
            placeholder="Слово на иностранном языке *"
            id=""
            className="border border-gray-300 rounded-md p-2 w-full"
          />

          <div className="h-4" />

          <input
            type="text"
            name=""
            placeholder="Слово на вашем языке *"
            id=""
            className="border border-gray-300 rounded-md p-2 w-full"
          />

          <div className="h-4" />

          <textarea
            name=""
            placeholder="Пример использования"
            id=""
            className="border border-gray-300 rounded-md p-2 h-36 w-full resize-none"
          />

          <div className="flex justify-end pt-4">
            <div className="p-2">
              <div className="rounded-full bg-red-600">
                <img
                  src={plusIcon}
                  alt="plus"
                  className="w-9 h-9 rotate-45"
                  onClick={() => toggle(false)}
                />
              </div>
            </div>

            <div className="p-2">
              <img
                src={checkIcon}
                alt="plus"
                className="w-9 h-9"
                onClick={() => toggle(false)}
              />
            </div>
          </div>
        </div>

      </div>
      

    </div>
  )
}