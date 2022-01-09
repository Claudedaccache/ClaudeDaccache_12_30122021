import React from "react";
import {NavLink} from "react-router-dom"
import styles from "../Error/Error.module.css" 

class ErrorMessage extends React.Component {
  render() {
    return (
      <div className={styles.errorPage}>
        <h2 className={styles.errorType}>404</h2>
        <h3 className={styles.errorMessage}>
          Oups! La page que vous demandez n'existe pas.
        </h3>
        <NavLink to="/" className={styles.errorBackwardSentence}>
          Retourner sur la page d’accueil
        </NavLink>
      </div>
    );
  }
}

export default ErrorMessage;
