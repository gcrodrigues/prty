import React, { useEffect, useContext } from "react";
import { EventCard, Modal } from "../";
import LayoutContext from "../../contexts/layout";
// import AuthContext from "../../contexts/auth";

import styles from "./EventList.module.css";

const EventList = ({ isOffline, isFavorite }) => {
  const {
    modalIsOpen,
    handleModal,
    setCurrentEvento,
    eventos,
    fetchEventos,
  } = useContext(LayoutContext);

  useEffect(() => {
    fetchEventos();
  }, [fetchEventos]);

  function handleEventInfo(pos) {
    handleModal();
    const filteredEvents = eventos.filter(
      (evento) => evento.usuario.id === Number(localStorage.getItem("id"))
    );
    setCurrentEvento(filteredEvents[pos]);
  }
  return (
    <div className={styles.cardList}>
      {modalIsOpen && !isOffline && <Modal event />}
      {isOffline
        ? eventos.map((evento) => (
            <EventCard
              key={evento.id}
              title={evento.nome}
              address={evento.local}
              date={evento.data}
              usuario={evento.usuario.nome}
              description={evento.descricao}
              value={evento.valor}
              isOffline
            />
          ))
        : /* isFavorite
        ? eventos.map((evento) => (
            <EventCard
              key={evento.id}
              title={evento.nome}
              address={evento.local}
              date={evento.data}
              isPrivate
            />
          ))
        : */ eventos
            .filter(
              (evento) =>
                evento.usuario.id === Number(localStorage.getItem("id"))
            )
            .map((evento, index) => (
              <EventCard
                pos={index}
                key={evento.id}
                title={evento.nome}
                address={evento.local}
                date={evento.data}
                handleEventInfo={handleEventInfo}
              />
            ))}
    </div>
  );
};

export default EventList;
