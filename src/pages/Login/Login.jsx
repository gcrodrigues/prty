import React, { useContext, useEffect } from "react";
import cn from "classnames";
import LayoutContext from "../../contexts/layout";
import { Link } from "react-router-dom";

import { SignForm } from "../../components";
import logo from "../../assets/logo.png";
import styles from "./Login.module.css";

const Login = () => {
  const { width, resizeWidth } = useContext(LayoutContext);

  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
  }, [resizeWidth]);

  useEffect(() => {
    window.removeEventListener("resize", null);
  }, [width]);

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
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <SignForm />
      </div>
      {width >= 1000 && <div className={styles.layer}></div>}
    </div>
  );
};

export default Login;
