import MainSection from "./mainSection/MainSection";
import Header from "../../../components/header/Header";
import styles from './General.module.css'
import Footer from "../../../components/footer/Footer";

function HomeScreen() {
  return (
    <div>
      <Header/>
      <MainSection/>
      <Footer/>
    </div>

  );
}

export default HomeScreen;
