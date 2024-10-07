import { useState } from "react";
import { createPortal } from 'react-dom';
import plusIcon from "/plus.svg";

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
        id="modalBackdrop"
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={() => toggle(false)}
      />
      <div
        id="modalContent"
        className="bg-white p-4 rounded-lg z-10"
      >
        <h1>Modal Content</h1>
        <button onClick={() => toggle(false)}>Close</button>
      </div>
      

    </div>
  )
}