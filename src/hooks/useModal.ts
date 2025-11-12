import { useState } from 'react';

export const useToggle = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return { show, toggleShow };
};

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return {
    open,
    setOpen,
    openModal,
    closeModal
  };
};