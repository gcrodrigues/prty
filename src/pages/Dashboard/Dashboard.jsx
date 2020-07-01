import React, { useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import { AppContainer } from "../../components";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const history = useHistory();
  const [eventName, setEventName] = useState("");
  const [local, setLocal] = useState("");
  const [valor, setValor] = useState(0);
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/eventos", {
      nome: eventName,
      local: local,
      valor: valor,
      descricao: descricao,
      data: data,
      usuario: null,
    });

    history.push("/myevents");
  }

  return (
    <AppContainer>
      <main className={styles.main}>
        <h1>Cadastre seu evento</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.wrapper}>
            <span>Nome do evento</span>
            <input type="text" onChange={(e) => setEventName(e.target.value)} />

            <span>Local</span>
            <input type="text" onChange={(e) => setLocal(e.target.value)} />

            <span>Descrição</span>
            <input type="text" onChange={(e) => setDescricao(e.target.value)} />
            <div className={styles.dualInput}>
              <div className={styles.inputWrapper}>
                <span>Valor</span>
                <input
                  type="number"
                  onChange={(e) => setValor(e.target.value)}
                />
              </div>
              <div className={styles.inputWrapper}>
                <span>Data</span>
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={(e) => setData(e.target.value)}
                />
              </div>
            </div>

            <button>Criar Evento</button>
          </div>
        </form>
      </main>
    </AppContainer>
  );
};

export default Dashboard;
