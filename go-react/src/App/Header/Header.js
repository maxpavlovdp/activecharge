import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.headerBox}>
            <div className={styles.textHeader}>
                <p className={styles.pHeader}>Welcome to 220km</p>
                <a className={styles.linkHeader} href={'https://github.com/maxpavlovdp/activecharge'}>View on GitHub</a>
            </div>
        </div>
    );
};

export default Header;