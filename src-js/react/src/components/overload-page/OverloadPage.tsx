import React, { useEffect, useState } from "react";
import styles from "./OverloadPage.module.css";
import axios from "axios";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useAppDispatch } from "../../hooks/reduxHooks";
import ErrorPage from "../error-page/ErrorPage";
import Spinner from "../spinner/Spinner";
import {
  fetchChargingData,
} from "../../store/reducers/ActionCreators";
import { useTranslation } from "react-i18next";

const OverloadPage = () => {
  const [power, setPower] = useState<any>();
  const [powerLimit, setPowerLimit] = useState<any>();
  const [link, setLink] = useState<any>();
  const [overload, setOverload] = useState<any>(false);
  const [completed, setCompleted] = useState<any>(false);
  const [loading, setLoading] = useState<any>(true);

  const { isLoadingCharging, error } = useAppSelector(
    (state) => state.fetchReducer
  );

  const urlPowerLimit = `${process.env.REACT_APP_LINK_SERVE}device/getPowerLimit`;
  const urlDeviceStatus = `${process.env.REACT_APP_LINK_SERVE}device/getDeviceStatus`;
  const urlCheckCompleted = `${process.env.REACT_APP_LINK_SERVE}device/isOverloadCheckCompleted`;
  const urlIsOverloaded = `${process.env.REACT_APP_LINK_SERVE}device/isPowerLimitOvelrloaded`;
  const urlPayment = `http://220-km.com:5000`;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const startOverloadChecing = () => {
    dispatch(fetchChargingData());
  };

  const getPowerLimit = async () => {
    await axios
      .get(urlPowerLimit)
      .then((response) => {
        setPowerLimit(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isOverloaded = async () => {
    await axios
      .get(urlIsOverloaded)
      .then((response) => {
        setOverload(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isCheckedCompleted = async () => {
    await axios
      .get(urlCheckCompleted)
      .then((response) => {
        setCompleted(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPower = async () => {
    await axios
      .get(urlDeviceStatus)
      .then((response) => {
        setPower(response.data.power);
        console.log(response.data.power)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkPowerLimit = () => {
    if (overload === false && completed === false) {
      getPower();
      isOverloaded();
      isCheckedCompleted();
    } else if (overload === true || completed === true) {
      return;
    }
  };

  const getPayLink = async () => {
    if (completed && link === undefined) {
      setLoading(true);
      await axios
        .get(urlPayment)
        .then((response) => {
          setLink(response.data.message);
          console.log(response.data.message);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
      console.log(link);
    }
  };

  useEffect(() => {
    console.log(isLoadingCharging);
    if (isLoadingCharging === false) {
      getPowerLimit();
      getPayLink();
      const overloadTimer = setInterval(() => {
        checkPowerLimit();
      }, 3000);
      return () => clearInterval(overloadTimer);
    }
  });

  if (error) {
    console.log(error);
    return (
      <ErrorPage errorHeader={t("errorDevHeader")} errorBody={t("errorDevBody")} />
    );
  }

  if (isLoadingCharging === true) return <Spinner />;

  return (
    <>
      {isLoadingCharging === false && (
        <div className={styles.checkOverloadContainer}>
          {overload === false && (
            <>
              {completed === true ? (
                <div className={styles.seccessCont}>
                  {loading ? (
                    <div className={styles.seccessCont}>
                      <p className={styles.waitPay}>
                        {t("overload.waitForLink")}!
                      </p>
                      <p className={styles.waitPayTwo}>
                        {t("overload.gettingLink")}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.seccessCont}>
                      <p className={styles.successCheck}>
                        {t("overload.successChecked")}!
                      </p>
                      <p className={styles.successCheck}>
                        {t("overload.letsCharge")}!
                      </p>
                      <button
                        className={loading ? styles.disaleBtn : styles.btnPay}
                        onClick={() => window.open(link)}
                      >
                        {t("overload.btnPay")}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className={styles.checkContainer}>
                  <p className={styles.checkText}>{t("overload.checking")}</p>
                </div>
              )}
            </>
          )}

          {overload === true && (
            <div className={styles.seccessCont}>
              <p className={styles.checkTextOverload}>
                {t("overload.overloadDetected")}! <br />
                {t("overload.slowdown")} {powerLimit} {t("overload.repeat")}
              </p>
              <button
                className={styles.btnPayOverload}
                onClick={() => {
                  startOverloadChecing();
                  setOverload(false);
                  setCompleted(false);
                }}
              >
                {t("overload.btnRepeat")}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default OverloadPage;
