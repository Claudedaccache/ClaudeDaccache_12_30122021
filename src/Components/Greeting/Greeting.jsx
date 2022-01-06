import React from "react";
import styles from "../Greeting/Greeting.module.css";

class Greeting extends React.Component {
  render() {
    return (
        <div className={styles.greetingContainer}>
          <p className={styles.userGreeting}>Bonjour <span className={styles.userName}>Thomas</span></p>
          <p className={styles.userEncouragingMessage}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
  }
}

export default Greeting;
