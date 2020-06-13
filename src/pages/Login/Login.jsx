import React, { useState, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import styles from "./Login.module.css";

const Login = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeWidth);
  }, []);

  return (
    <div
      className={
        width < 1000 ? styles.container : cn(styles.container, styles.bg)
      }
    >
      <div
        className={
          width < 1000 ? styles.loginMobileContainer : styles.loginContainer
        }
      >
        <img className={styles.logo} src={logo} alt="logo" />
        <form className={styles.form}>
          <h1 className={styles.formTitle}>Seja bem-vindo!</h1>
          <span>USERNAME</span>
          <input className={styles.input} type="text" name="user" id="user" />
          <span>SENHA</span>
          <input
            className={styles.input}
            type="password"
            name="password"
            id="password"
          />
          <button className={styles.btn}>Entrar</button>
          <p>
            Não é cadastrado? <Link to="/signup">Cadastre-se aqui!</Link>
          </p>
        </form>
      </div>
      {width >= 1000 && <div className={styles.layer}></div>}
    </div>
  );
};

export default Login;
