import React from 'react';
import Header from '../../../components/header/Header';
import ContractSection from './contractSection/ContractSection';
import Footer from './../../../components/footer/Footer';
import styles from './ContractScreen.module.css';

const ContractScreen = () => {
  return (
    <div className={styles.contractContainer}>
      <div>
        <Header />
        <ContractSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContractScreen;
