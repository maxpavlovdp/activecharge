import React, { useEffect } from "react";
import styles from "./MainSection.module.css";
import mainImg from "../../../assets/charging.png";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { idStart } from "../../../store/reducers/ActionCreators";
import MainImgLoadingLazy from "../../../components/lazyLoading/MainImgLoadingLazy";
import placehoderSrc from "../../../assets/chargingTiny.png";
import ErrorPage from "../../../components/error-page/ErrorPage";
import { setDeviceStatusUndefind } from "../../../store/reducers/FetchSlice";

const MainSection: React.FC = () => {
  const [searchParams] = useSearchParams();
  let stationNumber: any = searchParams.get("station");

  const { t } = useTranslation();

  const { error } = useAppSelector((state) => state.fetchReducer);

  const dispatch = useAppDispatch();

  const startCharging = () => {
    dispatch(idStart(stationNumber));
    dispatch(setDeviceStatusUndefind(undefined));
  };

  if (error) {
    return (
      <ErrorPage
        errorHeader={t("errorDevHeader")}
        errorBody={t("errorDevBody")}
      />
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
              className={process.env.REACT_APP_LINK_SERVE === "http://220-km.com:8080/" ? styles.prodBtnPay : styles.btnPay}
              onClick={startCharging}
            >
              {t("btns.start")}
            </Link>
            <Link
              to={`/charging?station=${stationNumber}`}
              className={styles.btn}
              onClick={startCharging}
            >
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
