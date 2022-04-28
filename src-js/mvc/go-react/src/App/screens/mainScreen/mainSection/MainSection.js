import React from 'react';
import styles from './MainSection.module.css';
import mainImg from  '../../../../assets/mainScreenImg/charging.png'
import {Link} from 'react-router-dom'
const MainSection = () => {
    return (
        <div className={styles.mainBox}>
          <div className={styles.container}>
            <h1 className={styles.title}>Заряди 220 кілометрів за ніч</h1>
            <div className={styles.btnStart}>
              <Link className={styles.btn} to='/payment'>Start</Link>
              <Link className={styles.btn} to='/charging'>Start Free</Link>
            </div>
            <img className={styles.mainImg} src={mainImg} alt="mainImg"/>
          </div>
        </div>
    );
};

export default MainSection;