import React, { createContext, useState } from "react";
import api from "../services/api";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentEvento, setCurrentEvento] = useState({});
  const [eventos, setEventos] = useState([]);
  const [eventosFiltrados, setEventosFiltrados] = useState([]);

  async function fetchEventos() {
    await api
      .get("eventos", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setEventos(response.data);
      });
  }

  async function fetchEventosFiltrados() {
    await api
      .get(`eventos/usuario/${Number(localStorage.getItem("id"))}`)
      .then((response) => setEventosFiltrados(response.data));
  }

  function isOpen() {
    setOpen(!open);
  }

  function resizeWidth() {
    setWidth(window.innerWidth);
  }

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <LayoutContext.Provider
      value={{
        open,
        isOpen,
        resizeWidth,
        width,
        modalIsOpen,
        handleModal,
        setCurrentEvento,
        currentEvento,
        eventos,
        eventosFiltrados,
        setEventos,
        fetchEventos,
        fetchEventosFiltrados,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
