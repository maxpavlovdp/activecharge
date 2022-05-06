import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Links() {

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

  return (
    <ul className={styles.routeLinks}>
      <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} className={styles.list}>
        <Link className={styles.links} to="/contacts">
          контактні дані
        </Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.10}} className={styles.list}>
        <Link className={styles.links} to="/contract">
          договір публічної оферти
        </Link>
      </motion.li>
    </ul>
  );
}
