import { useEffect, useState } from "react";
import styles from "./ChargingSection.module.css";
import Timer from "../../../components/timer/Timer";
import ErrorPage from "../../../components/error-page/ErrorPage";
import { useTranslation } from "react-i18next";
import Spinner from "../../../components/spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { getStationInfo } from "../../../store/reducers/ActionCreators";
import GetPower from "../../../components/getPower/GetPower";
import { useSearchParams } from "react-router-dom";

const MainSection: React.FC = () => {
  const [loading, setLoading] = useState<any>(true);
  const [secondsBackend, setSecondsBackend] = useState<any>();
  const [hoursTime, setHoursTime] = useState<any>();
  const [minuteTime, setMinuteTime] = useState<any>();
  const [secondsTime, setSecondsTime] = useState<any>(0);

  const [searchParams] = useSearchParams();
  let stationNumbers: any = searchParams.get("station");

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const { isLoadingCharging, deviceStatus, error } = useAppSelector(
    (state) => state.fetchReducer
  );

  const hours = (secondsBackend: any) => {
    setHoursTime(Math.floor(secondsBackend / 60 / 60));
    if (hoursTime) {
      setMinuteTime(Math.floor(secondsBackend / 60) - hoursTime * 60);
      setSecondsTime(secondsBackend % 60);
      setLoading(false);
    }
  };

  const interval: any = localStorage.getItem("interval");
  const sec = interval ? interval : 5000;
  let timerInterval = 3600 + interval;

  useEffect(() => {
    if (isLoadingCharging === false) {
      setTimeout(() => {
        dispatch(getStationInfo(stationNumbers));
      }, 5500);
    }
  }, [isLoadingCharging]);

  useEffect(() => {
      setSecondsBackend(deviceStatus?.leftS);
      if (deviceStatus?.state === "DONE" && deviceStatus?.leftS === 0) {
        setLoading(false);
      }
  }, [deviceStatus]);

  useEffect(() => {
    console.log("leftSec: " + secondsBackend);
    if (secondsBackend >= timerInterval) {
      hours(secondsBackend);
    }
    if (secondsBackend < timerInterval && secondsBackend > 0) {
      setMinuteTime(Math.floor(secondsBackend / 60));
      setSecondsTime(secondsBackend % 60);
      setLoading(false);
    }
    if (secondsBackend < 60 && secondsBackend > 0) {
      setSecondsTime(secondsBackend);
      setLoading(false);
    }
    if (secondsBackend <= 3 && secondsBackend > 0) {
      setLoading(false);
      setSecondsTime(0);
      setMinuteTime(0);
    }
  }, [secondsBackend, hoursTime]);

  if (error)
    return (
      <ErrorPage
        errorHeader={t("errorDevHeader")}
        errorBody={t("errorDevBody")}
      />
    );

  if (loading === true) return <Spinner />;

  return (
    <>
      <div className={styles.chargingBox}>
        {secondsTime >= 0 && (
          <div className={styles.contTimer}>
            <GetPower station={stationNumbers} sec={sec} />
            <Timer
              hours={hoursTime}
              minutes={minuteTime}
              seconds={secondsTime}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MainSection;
