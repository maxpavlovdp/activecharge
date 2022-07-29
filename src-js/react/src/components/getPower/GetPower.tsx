import React, { useEffect, useState } from "react";
import styles from "./GetPower.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getStationInfo } from "../../store/reducers/ActionCreators";
import { useTranslation } from "react-i18next";
import ProdPower from "./ProdPower";

export default function GetPower({ station, sec }: { station: any; sec: any }) {
  const dispatch = useAppDispatch();
  const { deviceStatus } = useAppSelector((state) => state.fetchReducer);
  const { t } = useTranslation();
  useEffect(() => {
    const timerID = setInterval(() => {
      if (deviceStatus?.state === "IN_PROGRESS") {
        dispatch(getStationInfo(station));
      }
    }, sec);
    return () => clearInterval(timerID);
  }, [deviceStatus?.state]);

  let kWtCharged = Number(deviceStatus?.chargedWt) / 1000;
  let kWtPower = Number(deviceStatus?.charginWt) / 1000;
  let voltage = Number(Math.round(deviceStatus?.voltage));

  // todo use for car range calculation feature
  // nisan leaf = 150
  // tesla model 3 = 100
  let carKwtKmRatio = 150;
  let isZero = deviceStatus?.chargedWt === undefined;
  let chargeStatus = `${isZero ? " " : kWtCharged.toFixed(2)} ${t("wt")}`;

  return (
    <>
      {process.env.REACT_APP_LINK_SERVE === "http://220-km.com:8080/" ? (
        <ProdPower
          kWtPower={kWtPower}
          voltage={voltage}
          deviceStatus={deviceStatus}
        />
      ) : (
        <div className={styles.timerBox}>
          <div className={styles.getPowerInfoCont}>
            <div
              className={
                deviceStatus?.state === "DONE" ||
                deviceStatus?.state === "FAILED" ||
                deviceStatus?.leftS <= 3
                  ? styles.offCont
                  : styles.power
              }
            >
              <p className={styles.textTitle}>{t("power")}</p>
              <p className={styles.text}>
                {kWtPower.toFixed(2)} {t("wt")}
              </p>
            </div>
            {deviceStatus?.state === "DONE" ||
            deviceStatus?.state === "FAILED" ||
            deviceStatus?.leftS <= 3 ? (
              <div className={styles.finishContainer}>
                <p className={styles.finishTitle}>{t("chargedCongrats")} </p>
                <p className={styles.finishText}>
                  {t("chargedkWt")}
                  {chargeStatus}
                </p>
              </div>
            ) : (
              <div className={styles.power}>
                <p className={styles.textTitle}>{t("charging")}</p>
                <p className={styles.text}>{chargeStatus}</p>
              </div>
            )}
          </div>
          <div>
            {deviceStatus?.state === "IN_PROGRESS" && (
              <div
                className={
                  deviceStatus?.state === "DONE" ||
                  deviceStatus?.state === "FAILED" ||
                  deviceStatus?.leftS <= 3
                    ? styles.offCont
                    : styles.voltageBox
                }
              >
                <p className={styles.voltTitle}>{t("voltage")}</p>
                <p className={styles.voltCharged}>
                  {voltage} {t("v")}
                </p>
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
      )}
    </>
  );
}
