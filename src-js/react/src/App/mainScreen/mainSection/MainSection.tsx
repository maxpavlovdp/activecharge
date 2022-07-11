import React from "react";
import styles from "./MainSection.module.css";
import mainImg from "../../../assets/charging.png";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { fetchChargingData } from "../../../store/reducers/ActionCreators";
import MainImgLoadingLazy from "../../../components/lazyLoading/MainImgLoadingLazy";
import placehoderSrc from "../../../assets/chargingTiny.png";
import ErrorPage from "../../../components/error-page/ErrorPage";

const MainSection: React.FC = () => {
  const [searchParams] = useSearchParams();
  let stationNumber: any = searchParams.get('station');
  console.log(stationNumber);
  localStorage.setItem('stationNumber', stationNumber ? stationNumber : '2');

  const { t } = useTranslation();

  const { error } = useAppSelector(
    (state) => state.fetchReducer
  );

  const dispatch = useAppDispatch();

  const startCharging = () => {
    dispatch(fetchChargingData());
  };
  if (error) {
    return (
    <ErrorPage errorHeader={t("errorDevHeader")} errorBody={t("errorDevBody")} />
  );
  }
  

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
