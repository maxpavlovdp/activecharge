import MainSection from "./mainSection/MainSection";
import Header from "../../../components/header/Header";
import styles from './Main.module.css'
import Footer from "../../../components/footer/Footer";

function HomeScreen() {
  return (
    <div className={styles.mainContainer}>
      <Header/>
      <MainSection/>
      <Footer/>
    </div>

  );
}

export default HomeScreen;
