import React from "react";
import { EventCard } from "../";

import styles from "./EventList.module.css";

const EventList = ({ isOffline, isFavorite }) => {
  const eventos = [
    {
      title: "Quermesse",
      address: "Rua São Jorge 248",
      date: "19/06/2020",
    },
    {
      title: "Bailão",
      address: "Rua São Jorge 248",
      date: "19/06/2020",
    },
    {
      title: "Role",
      address: "Rua São Jorge 248",
      date: "19/06/2020",
    },
    {
      title: "Role",
      address: "Rua São Jorge 248",
      date: "19/06/2020",
    },
    {
      title: "Role",
      address: "Rua São Jorge 248",
      date: "19/06/2020",
    },
    {
      title: "Role",
      address: "Rua São Jorge 248",
      date: "19/06/2020",
    },
  ];

  return (
    <div className={styles.cardList}>
      {isOffline
        ? eventos.map((evento) => (
            <EventCard
              title={evento.title}
              address={evento.address}
              date={evento.date}
              isOffline
            />
          ))
        : isFavorite
        ? eventos.map((evento) => (
            <EventCard
              title={evento.title}
              address={evento.address}
              date={evento.date}
              isPrivate
            />
          ))
        : eventos.map((evento) => (
            <EventCard
              title={evento.title}
              address={evento.address}
              date={evento.date}
            />
          ))}
    </div>
  );
};

export default EventList;
