import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

import styles from "./EventCard.module.css";

const EventCard = ({
  pos,
  title,
  address,
  date,
  description,
  value,
  usuario,
  isFavorite,
  handleEventInfo,
  isOffline,
}) => {
  return (
    <div className={styles.card}>
      <div>
        {isOffline ? (
          ""
        ) : isFavorite ? (
          <button>
            <FaRegStar size={22} color="#fff" />
          </button>
        ) : (
          <>
            <button
              className={styles.moreInfo}
              onClick={() => handleEventInfo(pos)}
            >
              <FiMoreHorizontal size={20} color="#fff" />
            </button>
          </>
        )}
      </div>
      <h2 className={styles.title}>{title}</h2>
      {isOffline && <p className={styles.user}>Criado por: {usuario}</p>}
      <p className={styles.address}>
        <strong>Local:</strong>
        {address}
      </p>
      {isOffline && (
        <p className={styles.description}>
          <strong>Descrição:</strong>
          {description}
        </p>
      )}

      <p className={styles.date}>
        <strong>Data:</strong> {date}
      </p>
      {isOffline && <p className={styles.value}>R$ {value},00</p>}
    </div>
  );
};

export default EventCard;
