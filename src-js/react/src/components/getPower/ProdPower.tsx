import styles from "./GetPower.module.css";
import { useTranslation } from "react-i18next";

export default function ProdPower({
  kWtPower,
  voltage,
  deviceStatus
}: {
  kWtPower: any;
  voltage: any;
  deviceStatus: any
}) {
  const { t } = useTranslation();
  return (
    <div className={styles.powerTimerBox}>
      <div className={styles.getPowerInfoCont}>
        {deviceStatus?.state === "DONE" ||
        deviceStatus?.state === "FAILED" ||
        deviceStatus?.leftS <= 3 ? (
          <div className={styles.finishContainer}>
            <p className={styles.finishTitle}>{t("chargedCongrats")} </p>
            <p className={styles.finishText}>{t("prodChargedCongrats")}</p>
          </div>
        ) : (
          <>
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
            <div
              className={
                deviceStatus?.state === "DONE" ||
                deviceStatus?.state === "FAILED" ||
                deviceStatus?.leftS <= 3
                  ? styles.offCont
                  : styles.power
              }
            >
              <p className={styles.textTitle}>{t("voltage")}</p>
              <p className={styles.text}>
                {voltage} {t("v")}
              </p>
            </div>
          </>
        )}

        {/* {deviceStatus?.state === "DONE" ||
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
        )} */}
      </div>
    </div>
  );
}
