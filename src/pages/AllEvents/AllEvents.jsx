import React from "react";
import { Navbar, EventList } from "../../components";
import { Link } from "react-router-dom";

import styles from "./AllEvents.module.css";
import logo from "../../assets/logo.png";

const AllEvents = () => {
  return (
    <>
      <Link to="/">
        <Navbar logo={logo} />
      </Link>
      <main className={styles.main}>
        <h1>Procure por Eventos!</h1>
        <EventList isOffline />
      </main>
    </>
  );
};

export default AllEvents;
