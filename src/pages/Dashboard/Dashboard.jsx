import React from "react";

import { AppContainer } from "../../components";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <AppContainer>
      <main className={styles.main}>
        <h1>Cadastre seu evento</h1>
        <form className={styles.form}>
          <div>
            <span>Nome do evento</span>
            <input type="text" />

            <span>Cidade</span>
            <input type="text" />

            <span>UF</span>
            <input type="text" />

            <span>Data</span>
            <input type="date" name="date" id="date" />
            <button>Criar Evento</button>
          </div>
        </form>
      </main>
    </AppContainer>
  );
};

export default Dashboard;
