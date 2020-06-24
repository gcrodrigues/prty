import React from "react";
import { Navbar, Drawer } from "../";

import styles from "./AppContainer.module.css";

function AppContainer({ children }) {
  return (
    <div className={styles.container}>
      <Drawer />
      <Navbar />
      {children}
    </div>
  );
}

export default AppContainer;
