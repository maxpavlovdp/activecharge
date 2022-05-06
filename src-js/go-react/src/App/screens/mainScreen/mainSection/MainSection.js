import React, { useEffect, useState } from 'react';
import styles from './MainSection.module.css';
import mainImg from '../../../../assets/mainScreenImg/charging.png';
import { Link } from 'react-router-dom';
import RotateLoader from 'react-spinners/RotateLoader';
import { css } from "@emotion/react";
const MainSection = () => {
  const [link, setLink] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000`);
      setLink(await response.json());
    };
    fetchData();
    
  }, []);
  console.log(link);
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  return (
    <div className={styles.mainBox}>
      {link ? (
        <div className={styles.container}>
          <h1 className={styles.title}>Заряди 220 кілометрів за ніч</h1>
          <div className={styles.btnStart}>
            <button
              className={styles.btnPay}
              onClick={() => window.open(link.message)}
            >
              Start
            </button>
            <Link className={styles.btn} to="/charging">
              Start Free
            </Link>
          </div>
          <div className={styles.imgCont}>
            <img className={styles.mainImg} src={mainImg} alt="mainImg" />
          </div>
        </div>
      ) : (
          <RotateLoader color={'#04AA6D'} css={override} size={15}/>
      )}
    </div>
  );
};

export default MainSection;
