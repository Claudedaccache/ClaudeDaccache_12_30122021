import React from "react";
import Logo from "../Logo/Logo";
import styles from "../Header/Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.contentContainer}>
        <div>
          {" "}
          <Logo color="#E60000" />
        </div>
        <div className={styles.navItems}>
          <div className="navItem">Accueil</div>
          <div className="navItem">Profil</div>
          <div className="navItem">Réglage</div>
          <div className="navItem">Communauté</div>
        </div>
      </div>
    );
  }
}

export default Header;
