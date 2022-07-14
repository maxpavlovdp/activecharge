import { useEffect, useState } from "react";
import styles from "./ChargingSection.module.css";
import Timer from "../../../components/timer/Timer";
import ErrorPage from "../../../components/error-page/ErrorPage";
import { useTranslation } from "react-i18next";
import Spinner from "../../../components/spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { getStationInfo } from "../../../store/reducers/ActionCreators";
import GetPower from "../../../components/getPower/GetPower";

const MainSection: React.FC = () => {
  const [loading, setLoading] = useState<any>(true);
  const [secondsBackend, setSecondsBackend] = useState<any>();
  const [hoursTime, setHoursTime] = useState<any>();
  const [minuteTime, setMinuteTime] = useState<any>();
  const [secondsTime, setSecondsTime] = useState<any>(0);

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

  useEffect(() => {
    if (isLoadingCharging === false) {
      setTimeout(() => {
        dispatch(getStationInfo());
      }, 5500);
    }
  }, [isLoadingCharging]);

  useEffect(() => {
    setSecondsBackend(deviceStatus?.leftS);
  }, [deviceStatus]);

  useEffect(() => {
    console.log('leftSec: ' + secondsBackend);
    if (secondsBackend >= 3610) {
      hours(secondsBackend);
    }
    if (secondsBackend < 3610) {
      setMinuteTime(Math.floor(secondsBackend / 60));
      setSecondsTime(secondsBackend % 60);
      setLoading(false);
    }
    if (secondsBackend < 60) {
      setSecondsTime(secondsBackend);
      setLoading(false);
    }
    if (secondsBackend <= 3) {
      setSecondsTime(0);
      setMinuteTime(0);
      setLoading(false);
    }
  }, [secondsBackend, hoursTime]);

  if (error)
    return (
      <ErrorPage errorHeader={t("errorDevHeader")} errorBody={t("errorDevBody")} />
    );

  if (loading === true) return <Spinner />;

  return ( 
    <>
      <div className={styles.chargingBox}>
        {secondsTime >= 0 && (
          <div className={styles.contTimer}>
            <GetPower />
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
