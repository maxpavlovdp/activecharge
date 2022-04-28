import React, {useState} from 'react';
import styles from './Header.module.css';
import logo from "../../assets/mainScreenImg/logo.png"
import {Link} from 'react-router-dom'

const Header = () => {
  const [fix, setFix] = useState(false)

  const fixed = () => {
    if (window.scrollY >= 1) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener('scroll', fixed)
  return (
    <header className={styles.headerBox}>
      <nav className={fix ? styles.paddingBoxFixed : styles.paddingBox}>
        <Link className={styles.homeLink} to="/">
          <img className={styles.logoImg} src={logo} alt="logo"/>
          <h3 className={styles.logoText}>220-km.com</h3>
        </Link>
        <ul className={styles.routeLinks}>
          <li>
            <Link className={styles.links} to="/contacts">контактні дані</Link>
          </li>
          <li>
            <Link className={styles.links} to="/contract">договір публічної оферти</Link>
          </li>

        </ul>
      </nav>

    </header>
  );
};

export default Header;