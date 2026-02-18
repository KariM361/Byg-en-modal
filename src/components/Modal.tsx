import { useState } from "react";
import style from './Modal.module.scss';

export function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  // funktioner til at åbne og lukke modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Åbn modal knap */}
      <button className={style.openBtn} onClick={openModal}>
        Åbn Modal
      </button>

      {/* Conditional rendering */}
      {isOpen && (
        <div className={style.modalWrapper}>
          <div className={style.modal}>
            <h2>Dette er modalens titel</h2>
            <p>Her kan du placere indholdet.</p>
            <button className={style.closeBtn} onClick={closeModal}>
              Luk
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
