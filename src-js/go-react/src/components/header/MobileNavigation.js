import React, { useState } from 'react';
import Links from './Links';
import styles from './Header.module.css';
import { IoClose, IoMenu } from 'react-icons/io5';
import Navigation from './Navigation';

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const openIcon = (
    <IoMenu
      className={styles.burger}
      onClick={() => setOpen(!open)}
      size="25px"
      color="#393939"
    />
  );

  const closeIcon = (
    <IoClose
      className={styles.burger}
      onClick={() => setOpen(!open)}
      size="25px"
      color="#393939"
    />
  );

  return (
    <div className={styles.mobileNavigation}>
      {open ? closeIcon : openIcon}
      {open && <Links />}
    </div>
  );
}
