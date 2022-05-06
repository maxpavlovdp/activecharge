import React from 'react';
import Header from '../../../components/header/Header';
import Footer from './../../../components/footer/Footer';
import ContactsSection from './contactsSection/ContactsSection';
import styles from './ContactsScreen.module.css';

const ContactsScreen = () => {
  return (
    <div className={styles.contactsContainer}>
      <div>
        <Header />
        <ContactsSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContactsScreen;
