import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import cn from "classnames";
import { Link } from "react-router-dom";

import { SignButtons } from "../../components";
import AuthContext from "../../contexts/auth";
import styles from "./Navbar.module.css";

const Navbar = ({ logo }) => {
  const { isOpen } = useContext(AuthContext);

  return (
    <div
      className={
        logo
          ? cn(styles.header, styles.headerAuth)
          : cn(styles.header, styles.headerApp)
      }
    >
      {logo && <img src={logo} alt="logo" />}
      {logo ? (
        <SignButtons />
      ) : (
        <>
          <FaBars onClick={isOpen} size={22} color="#fff" />
          <p>Olá, Gustavo</p>
        </>
      )}
    </div>
  );
};

export default Navbar;
