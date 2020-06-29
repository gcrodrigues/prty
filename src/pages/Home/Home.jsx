import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth";

import { SignButtons } from "../../components";
import styles from "./Home.module.css";
import logo from "../../assets/logo.png";

const Home = () => {
  const { width, resizeWidth } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
  });
  console.log();

  useEffect(() => {
    window.removeEventListener("resize", null);
  }, [width]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src={logo} alt="PRTY logo" />
          {width > 700 && <SignButtons />}
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.home}>
          <div className={styles.layer}></div>
          <div className={styles.homeContent}>
            <h1 className={styles.title}>
              Crie <span>festas</span>, <span>reuniões</span> e
              <span> palestras</span> e procure por <span>eventos</span> que
              combinem com você!
            </h1>
            {width <= 700 ? (
              <SignButtons />
            ) : (
              <Link className={styles.btnEvents} to="/events">
                Ver eventos
              </Link>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
