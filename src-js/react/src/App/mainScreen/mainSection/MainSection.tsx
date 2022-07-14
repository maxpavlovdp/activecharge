import React from "react";
import styles from "./MainSection.module.css";
import mainImg from "../../../assets/charging.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { idStart } from "../../../store/reducers/ActionCreators";
import MainImgLoadingLazy from "../../../components/lazyLoading/MainImgLoadingLazy";
import placehoderSrc from "../../../assets/chargingTiny.png";

const MainSection: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const startCharging = () => {
    dispatch(idStart());
  };

  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.container}>
          <h1 className={styles.title}>{t("title")}</h1>
          <div className={styles.btnStart}>
            <Link
              to="/overload"
              className={styles.btnPay}
              onClick={startCharging}
            >
              {t("btns.start")}
            </Link>
            <Link to="/charging" className={styles.btn} onClick={startCharging}>
              {t("btns.startFree")}
            </Link>
          </div>
          <div className={styles.imgCont}>
            <MainImgLoadingLazy
              src={mainImg}
              alt={"station"}
              placeholderSrc={placehoderSrc}
              width="256"
              heigth="256"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
