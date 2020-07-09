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
    eventosFiltrados,
    eventos,
    fetchEventos,
    fetchEventosFiltrados,
  } = useContext(LayoutContext);

  useEffect(() => {
    fetchEventos();
    //eslint-disable-next-line
  }, [eventos]);

  useEffect(() => {
    fetchEventosFiltrados();
    //eslint-disable-next-line
  }, [eventosFiltrados]);

  function handleEventInfo(pos) {
    handleModal();
    setCurrentEvento(eventosFiltrados[pos]);
  }
  return (
    <div className={styles.cardList}>
      {eventos.length === 0 ? (
        <div className={styles.emptyContainer}>
          <h1 className={styles.empty}>Nenhum evento encontrado</h1>
        </div>
      ) : (
        <>
          {modalIsOpen && !isOffline ? <Modal event /> : ""}
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
            : eventosFiltrados.map((evento, index) => (
                <EventCard
                  pos={index}
                  key={evento.id}
                  title={evento.nome}
                  address={evento.local}
                  date={evento.data}
                  handleEventInfo={handleEventInfo}
                />
              ))}
        </>
      )}
    </div>
  );
};

export default EventList;
