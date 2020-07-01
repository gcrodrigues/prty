import React from "react";
import { Evento } from "../";

import styles from "./Modal.module.css";

function Modal() {
  return (
    <div className={styles.container}>
      <Evento />
    </div>
  );
}

export default Modal;
