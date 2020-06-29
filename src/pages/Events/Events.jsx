import React from "react";
import { AppContainer, EventList } from "../../components";

import styles from "./Events.module.css";

const Events = () => {
  return (
    <AppContainer>
      <main className={styles.main}>
        <h1>Seus Eventos</h1>
        <EventList />
      </main>
    </AppContainer>
  );
};

export default Events;
