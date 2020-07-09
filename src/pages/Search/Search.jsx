import React from "react";
import { AppContainer, EventList } from "../../components";

import styles from "./Search.module.css";

function Search() {
  return (
    <AppContainer>
      <main className={styles.main}>
        <h1>Eventos</h1>
        <EventList isOffline />
      </main>
    </AppContainer>
  );
}

export default Search;
