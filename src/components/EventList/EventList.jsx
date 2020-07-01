import React, { useEffect, useContext } from "react";
import { EventCard, Modal } from "../";
import LayoutContext from "../../contexts/layout";

import styles from "./EventList.module.css";

const EventList = ({ isOffline, isFavorite }) => {
  const { modalIsOpen, handleOpenModal, eventos, fetchEventos } = useContext(
    LayoutContext
  );

  useEffect(() => {
    fetchEventos();
    //eslint-disable-next-line
  }, [eventos]);

  return (
    <div className={styles.cardList}>
      {modalIsOpen && !isOffline ? <Modal /> : ""}
      {isOffline
        ? eventos.map((evento) => (
            <EventCard
              key={evento.id}
              title={evento.nome}
              address={evento.local}
              date={evento.data}
              isOffline
            />
          ))
        : isFavorite
        ? eventos.map((evento) => (
            <EventCard
              key={evento.id}
              title={evento.nome}
              address={evento.local}
              date={evento.data}
              isPrivate
            />
          ))
        : eventos.map((evento, index) => (
            <EventCard
              pos={index}
              key={evento.id}
              title={evento.nome}
              address={evento.local}
              date={evento.data}
              handleOpenModal={handleOpenModal}
            />
          ))}
    </div>
  );
};

export default EventList;
