import React from 'react';
import styles from './MainSection.module.css';
import gStyle from '../General.module.css'
const MainSection = () => {
    const classes = styles.mainBox + ' ' + gStyle.margStruct;
    return (
        <div className={classes}>
            <h2 className={styles.title}>Welcomeg to 220km</h2>
            <button className={styles.btn}>Start Charge</button>
        </div>
    );
};

export default MainSection;