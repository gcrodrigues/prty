import React, { useContext } from "react";
import { AppContainer, EventList } from "../../components";
import LayoutContext from "../../contexts/layout";
import cn from "classnames";

import styles from "./Events.module.css";

const Events = () => {
  const { modalIsOpen } = useContext(LayoutContext);
  return (
    <AppContainer>
      <main
        className={
          modalIsOpen ? cn(styles.main, styles.overflowHidden) : styles.main
        }
      >
        <h1>Seus Eventos</h1>
        <EventList />
      </main>
    </AppContainer>
  );
};

export default Events;
