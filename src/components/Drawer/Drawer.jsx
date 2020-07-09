import React, { useContext } from "react";
import {
  FaPlusSquare,
  FaCalendar,
  FaCog,
  FaTimes,
  FaSearch,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import LayoutContext from "../../contexts/layout";
import AuthContext from "../../contexts/auth";

import cn from "classnames";
import styles from "./Drawer.module.css";
import logo from "../../assets/logo.png";

const Drawer = () => {
  const { open, isOpen } = useContext(LayoutContext);
  const { signOut } = useContext(AuthContext);

  return (
    <div
      className={
        open ? styles.drawerContainer : cn(styles.drawerContainer, styles.open)
      }
    >
      <FaTimes
        onClick={isOpen}
        className={styles.closeDrawer}
        size={26}
        color="#fff"
      />
      <img className={styles.logo} src={logo} alt="logo" />
      <ul className={styles.listaOpcoes}>
        <NavLink
          activeClassName={styles.active}
          className={styles.opcaoLink}
          to="/myevents"
        >
          <li>
            <FaCalendar size={22} color="#fff" /> Meus Eventos
          </li>
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          className={styles.opcaoLink}
          to="/create"
        >
          <li>
            <FaPlusSquare size={22} color="#fff" /> Criar Evento
          </li>
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          className={styles.opcaoLink}
          to="/search"
        >
          <li>
            <FaSearch size={22} color="#fff" /> Buscar Eventos
          </li>
        </NavLink>
        {/* <NavLink
          activeClassName={styles.active}
          className={styles.opcaoLink}
          to="/favorites"
        >
          <li>
            <FaStar size={22} color="#fff" /> Favoritos
          </li>
        </NavLink> */}
        <NavLink
          activeClassName={styles.active}
          className={styles.opcaoLink}
          to="/settings"
        >
          <li>
            <FaCog size={22} color="#fff" /> Configurações
          </li>
        </NavLink>
      </ul>
      <button className={styles.logOut} onClick={signOut}>
        <FaSignOutAlt size={22} /> Sair
      </button>
    </div>
  );
};

export default Drawer;
