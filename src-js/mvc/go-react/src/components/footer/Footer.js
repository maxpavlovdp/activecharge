import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerBox}>
      <p className={styles.footerText}>©2022 All rights reserved. Made by <a className={styles.footerLink} href="https://www.facebook.com/zeBoosterLab/">ZE
        Booster Lab</a> with ♥ to Zero Emission Vehicles</p>
    </div>
  )
}

export default Footer;