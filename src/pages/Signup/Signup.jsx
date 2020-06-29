import React, { useEffect, useContext } from "react";
import cn from "classnames";
import AuthContext from "../../contexts/auth";

import { SignForm } from "../../components";
import styles from "./Signup.module.css";
import logo from "../../assets/logo.png";

const Signup = () => {
  const { width, resizeWidth } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
  });

  useEffect(() => {
    window.removeEventListener("resize", null);
  }, [width]);

  return (
    <div
      className={
        width < 1000 ? styles.container : cn(styles.container, styles.bg)
      }
    >
      {width >= 1000 && <div className={styles.layer}></div>}
      <div
        className={
          width < 1000 ? styles.loginMobileContainer : styles.loginContainer
        }
      >
        <img className={styles.logo} src={logo} alt="logo" />
        <SignForm cadastro />
      </div>
    </div>
  );
};

export default Signup;
