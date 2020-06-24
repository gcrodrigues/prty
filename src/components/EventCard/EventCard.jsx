import React from "react";
import { FaRegTrashAlt, FaRegEdit, FaRegStar } from "react-icons/fa";

import styles from "./EventCard.module.css";

const EventCard = ({ title, address, date, isFavorite, isOffline }) => {
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
            <button>
              <FaRegEdit size={22} color="#fff" />
            </button>
            <button>
              <FaRegTrashAlt size={22} color="#fff" />
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
