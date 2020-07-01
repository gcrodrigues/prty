import React, { createContext, useState } from "react";
import api from "../services/api";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentEvento, setCurrentEvento] = useState({});
  const [eventos, setEventos] = useState([]);

  function fetchEventos() {
    api.get("eventos").then((response) => {
      setEventos(response.data);
    });
  }

  function isOpen() {
    setOpen(!open);
  }

  function resizeWidth() {
    setWidth(window.innerWidth);
  }

  function handleOpenModal(pos) {
    setModalIsOpen(true);
    setCurrentEvento(eventos[pos]);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <LayoutContext.Provider
      value={{
        open,
        isOpen,
        resizeWidth,
        width,
        modalIsOpen,
        handleCloseModal,
        handleOpenModal,
        currentEvento,
        eventos,
        fetchEventos,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
