import React from "react";
import { Navbar, EventList } from "../../components";

import styles from "./AllEvents.module.css";
import logo from "../../assets/logo.png";

const AllEvents = () => {
  return (
    <>
      <Navbar logo={logo} />
      <main className={styles.main}>
        <h1>Procure por Eventos!</h1>
        <EventList isOffline />
      </main>
    </>
  );
};

export default AllEvents;
