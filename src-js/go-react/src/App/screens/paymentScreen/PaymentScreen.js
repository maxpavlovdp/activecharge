import React from 'react';
import Header from '../../../components/header/Header';
import PaymentSection from './paymentSection/PaymentSection';
import Footer from './../../../components/footer/Footer';
import styles from './PaymentScreen.module.css'

const PaymentScreen = () => {
  return (
    <div className={styles.paymentContainer}>
      <div>
        <Header />
        <PaymentSection />
      </div>
      <Footer />
    </div>
  );
};

export default PaymentScreen;
