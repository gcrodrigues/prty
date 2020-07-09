import React, { useContext, useState } from "react";
import LayoutContext from "../../contexts/layout";
import { FaTrash, FaPen, FaTimes } from "react-icons/fa";
import cn from "classnames";
import api from "../../services/api";
import AuthContext from "../../contexts/auth";

import styles from "./Evento.module.css";

function Evento() {
  const { user } = useContext(AuthContext);
  const { currentEvento, handleModal } = useContext(LayoutContext);
  const [descricao, setDescricao] = useState(currentEvento.descricao);
  const [local, setLocal] = useState(currentEvento.local);
  const [data, setData] = useState(currentEvento.data);
  const [valor, setValor] = useState(currentEvento.valor.toFixed(2));
  const [disabled, setDisabled] = useState(true);

  function handleDisabledInput() {
    setDisabled(!disabled);
  }

  async function handleEditEvent(e) {
    e.preventDefault();
    await api.put(
      "eventos",
      {
        id: currentEvento.id,
        usuario: user,
        nome: currentEvento.nome,
        descricao,
        local,
        data,
        valor,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    handleModal();
  }
  async function handleDeleteEvent() {
    await api.delete(`eventos/${currentEvento.id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    handleModal();
  }

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={handleModal}>
        <FaTimes size={20} />
      </button>
      <h2 className={styles.title}>{currentEvento.nome}</h2>
      <form className={styles.form}>
        <span>Descrição</span>
        <input
          className={styles.input}
          id="descricao"
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          disabled={disabled}
          required
        />

        <span>Local</span>
        <input
          className={styles.input}
          type="text"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          disabled={disabled}
          required
        />

        <div className={styles.dualInput}>
          <div className={styles.inputWrapper}>
            <span>Data</span>
            <input
              className={styles.input}
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              disabled={disabled}
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <span>Valor</span>
            <input
              className={styles.input}
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              disabled={disabled}
              required
            />
          </div>
        </div>
        {!disabled && (
          <input
            onClick={handleEditEvent}
            className={styles.submit}
            type="submit"
            value="Editar"
          />
        )}
      </form>

      {disabled && (
        <div className={styles.buttons}>
          <button
            onClick={handleDisabledInput}
            className={cn(styles.button, styles.edit)}
          >
            <FaPen size={20} />
          </button>
          <button
            onClick={handleDeleteEvent}
            className={cn(styles.button, styles.trash)}
          >
            <FaTrash size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Evento;
