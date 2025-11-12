import React, { useEffect } from "react";
import styled from "styled-components";
import { IModal } from "../../types/general.types";

const Modal: React.FC<IModal> = ({ open, children, openModal, closeModal }: IModal) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      <VisuallyHidden>
        <button type="button" onClick={openModal}>
          Open Dialog
        </button>
      </VisuallyHidden>

      <DialogOverlay $isOpen={open} onClick={handleOverlayClick}>
        <DialogContent>
          <VisuallyHidden>
            <button className="close-button" title="Close modal" onClick={closeModal}>
              <span aria-hidden>×</span>
            </button>
          </VisuallyHidden>

          <ScrollableContainer>{children}</ScrollableContainer>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

export default Modal;

// Styled Components
const VisuallyHidden = styled.div`
  display: none;
`;

const DialogOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ $isOpen }: { $isOpen: boolean }) => ($isOpen ? "flex" : "none")}; 
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const DialogContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 10px 50px hsla(0, 0%, 0%, 0.33);
  max-width: 90%;
  max-height: 90vh;
  width: 450px; 
  position: relative;

  @media (min-width: 768px) {
    width: 700px; /* Wider on tablets */
  }



`;

const ScrollableContainer = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 20px;
`;