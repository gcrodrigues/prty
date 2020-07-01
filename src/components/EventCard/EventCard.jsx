import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

import styles from "./EventCard.module.css";

const EventCard = ({
  pos,
  title,
  address,
  date,
  isFavorite,
  handleOpenModal,
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
              onClick={() => handleOpenModal(pos)}
            >
              <FiMoreHorizontal size={20} color="#fff" />
            </button>
          </>
        )}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.address}>{address}</p>
      <p className={styles.date}>
        <strong>Data:</strong> {date}
      </p>
    </div>
  );
};

export default EventCard;
