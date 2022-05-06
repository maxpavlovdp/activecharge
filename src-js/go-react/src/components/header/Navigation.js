import React from 'react';
import Links from './Links';
import styles from './Header.module.css';

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <Links />
    </div>
  );
}
