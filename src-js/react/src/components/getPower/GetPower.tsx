import React, { useEffect, useState } from "react";
import styles from "./GetPower.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  getChargingStatus,
  getDeviceStatus,
} from "../../store/reducers/ActionCreators";
import { useTranslation } from "react-i18next";

export default function GetPower() {
  const dispatch = useAppDispatch();
  const { deviceStatus, chargingStatus } = useAppSelector(
    (state) => state.fetchReducer
  );
  const { t } = useTranslation();
  const getNumber = () => {
    dispatch(getChargingStatus());
    dispatch(getDeviceStatus());
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      if (deviceStatus.switchState === true) {
        getNumber();
      }
    }, 4000);
    return () => clearInterval(timerID);
  }, [deviceStatus.switchState]);

  let kWtCharged = chargingStatus;
  let kWtPower = Number(deviceStatus.power) / 1000;
  let voltage = Number(Math.round(deviceStatus.voltage));

  // todo use for car range calculation feature
  // nisan leaf = 150
  // tesla model 3 = 100
  let carKwtKmRatio = 150;
  let isZero = chargingStatus === undefined;
  let chargeStatus = `${isZero ? " " : kWtCharged.toFixed(2)} ${t("wt")}`;

  return (
    <div className={styles.timerBox}>
      <div className={styles.getPowerInfoCont}>
        <div
          className={
            deviceStatus?.switchState ? styles.power : styles.offCont
          }
        >
          <p className={styles.textTitle}>{t("power")}</p>
          <p className={styles.text}>
            {kWtPower.toFixed(2)} {t("wt")}
          </p>
        </div>
        {deviceStatus?.switchState === true ? (
          <div className={styles.power}>
            <p className={styles.textTitle}>{t("charging")}</p>
            <p className={styles.text}>{chargeStatus}</p>
          </div>
        ) : (
          <div className={styles.finishContainer}>
            <p className={styles.finishTitle}>{t("chargedCongrats")} </p>
            <p className={styles.finishText}>
              {t("chargedkWt")}
              {chargeStatus}
            </p>
          </div>
        )}
      </div>
      <div>
      {deviceStatus?.switchState && (
        <div className={styles.voltageBox}>
          <p className={styles.voltTitle}>{t("voltage")}</p>
          <p className={styles.voltCharged}>{voltage} {t("v")}</p>
        </div>
        
        )}
        <p className={styles.kmCharged}>
          {isZero
            ? 0
            : Math.round((kWtCharged * 1000) / Math.round(carKwtKmRatio))} 
          {t("km")}
        </p>
        
      </div>
    </div>
  );
}
