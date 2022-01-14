import React from "react";
import Logo from "../Logo/Logo";
import styles from "../Header/Header.module.css";

/**
 * class to display the header with its nav contents
 */
class Header extends React.Component {
  render() {
    return (
      <div className={styles.contentContainer}>
        <div>
          {" "}
          <Logo color="#E60000" />
        </div>
        <div className={styles.navItems}>
          <div to="/user/id" className="navItem">
            Accueil
          </div>
          <div className="navItem">Profil</div>
          <div className="navItem">Réglage</div>
          <div className="navItem">Communauté</div>
        </div>
      </div>
    );
  }
}

export default Header;
