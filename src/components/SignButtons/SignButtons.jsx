import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import styles from "./SignButtons.module.css";

const SignButtons = () => {
  return (
    <div>
      <Link className={cn(styles.login, styles.button)} to="/login">
        Login
      </Link>
      <Link className={cn(styles.signup, styles.button)} to="/signup">
        Cadastre-se
      </Link>
    </div>
  );
};

export default SignButtons;
