import React, { useContext } from "react";
import { Evento, Usuario } from "../";
import LayoutContext from "../../contexts/layout";
import cn from "classnames";

import styles from "./Modal.module.css";

function Modal({ event }) {
  const { modalIsOpen } = useContext(LayoutContext);

  return (
    <div
      className={
        modalIsOpen ? styles.container : cn(styles.container, styles.fadeout)
      }
    >
      {event ? <Evento /> : <Usuario />}
    </div>
  );
}

export default Modal;
