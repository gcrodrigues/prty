import React, { useContext, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import cn from "classnames";

import { SignButtons } from "../../components";
import LayoutContext from "../../contexts/layout";
import styles from "./Navbar.module.css";

const Navbar = ({ logo }) => {
  const { isOpen, width, resizeWidth } = useContext(LayoutContext);
  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
  }, []);

  return (
    <div
      className={
        logo
          ? cn(styles.header, styles.headerAuth)
          : cn(styles.header, styles.headerApp)
      }
    >
      {logo && <img src={logo} alt="logo" />}
      {logo && width > 700 && <SignButtons />}
      {!logo && (
        <>
          <FaBars onClick={isOpen} size={22} color="#fff" />
          <p>Olá, {localStorage.getItem("user")}</p>
        </>
      )}
    </div>
  );
};

export default Navbar;
