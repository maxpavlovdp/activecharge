import React from 'react';
import Header from '../../../components/header/Header';
import ChargingSection from './chargingSection/ChargingSection';
import styles from './ChargingScreen.module.css';
import Footer from './../../../components/footer/Footer';

const ChargingScreen = () => {
  return (
    <div className={styles.chargingContainer}>
      <div>
        <Header />
        <ChargingSection />
      </div>

      <Footer />
    </div>
  );
};

export default ChargingScreen;
