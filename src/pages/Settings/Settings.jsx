import React, { useState, useContext } from "react";
import { AppContainer, Modal } from "../../components";
import { useHistory } from "react-router-dom";
import { FaUserCircle, FaPen, FaTrash } from "react-icons/fa";
import cn from "classnames";
import LayoutContext from "../../contexts/layout";
import api from "../../services/api";

import styles from "./Settings.module.css";
import { useEffect } from "react";

const Settings = () => {
  const history = useHistory();
  const { modalIsOpen, handleModal } = useContext(LayoutContext);
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    handleUsuario();
  }, []);

  async function handleUsuario() {
    await api
      .get(`usuarios/${Number(localStorage.getItem("id"))}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => setUsuario(res.data));
  }

  async function handleDeleteUser() {
    await api
      .delete(`usuarios/${usuario.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert("Usuário deletado com sucesso!");
        localStorage.removeItem("id");
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        history.push("/");
      })
      .catch((err) => alert("Não foi possível deletar o usuário"));
  }

  return (
    <AppContainer>
      {modalIsOpen && <Modal />}

      <main className={styles.main}>
        <div className={styles.user}>
          <FaUserCircle size={220} color="#cfcfcf" />

          <p className={styles.nome}>{localStorage.getItem("user")}</p>
          <p className={styles.email}>{localStorage.getItem("email")}</p>
        </div>
        <div className={styles.buttons}>
          <button
            className={cn(styles.button, styles.edit)}
            onClick={handleModal}
          >
            <FaPen size={20} /> Editar conta
          </button>

          <button
            className={cn(styles.button, styles.delete)}
            onClick={handleDeleteUser}
          >
            <FaTrash /> Deletar conta
          </button>
        </div>
      </main>
    </AppContainer>
  );
};

export default Settings;
