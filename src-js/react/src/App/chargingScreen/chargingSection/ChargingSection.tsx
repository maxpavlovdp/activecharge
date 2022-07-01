import { useEffect, useState } from "react";
import styles from "./ChargingSection.module.css";
import Timer from "../../../components/timer/Timer";
import axios from "axios";
import ErrorPage from "../../../components/error-page/ErrorPage";
import { useTranslation } from "react-i18next";
import Spinner from "../../../components/spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  getChargingStatus,
  getDeviceStatus,
} from "../../../store/reducers/ActionCreators";
import GetPower from "../../../components/getPower/GetPower";

const MainSection: React.FC = () => {
  const [loading, setLoading] = useState<any>(true);
  const [secondsBackend, setSecondsBackend] = useState<any>();
  const [hoursTime, setHoursTime] = useState<any>();
  const [minuteTime, setMinuteTime] = useState<any>();
  const [secondsTime, setSecondsTime] = useState<any>(0);

  const secondsUrl = `${process.env.REACT_APP_LINK_SERVE}device/getChargingDurationLeftSecs`;

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const { isLoadingCharging, startDataCharging, error } = useAppSelector(
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
    console.log(isLoadingCharging);
    if (isLoadingCharging === false) {
      dispatch(getChargingStatus());
      dispatch(getDeviceStatus());
      setTimeout(() => {
        axios
          .get(secondsUrl)
          .then((response) => {
            setSecondsBackend(response.data.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 4000);
    }
  }, [isLoadingCharging]);

  useEffect(() => {
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
    if (secondsBackend <= 2) {
      setSecondsTime(0);
      setLoading(false);
    }
  }, [secondsBackend, hoursTime]);

  if (error || startDataCharging?.message === 'error')
    return (
      <ErrorPage errorHeader={t("errorHeader")} errorBody={t("errorBody")} />
    );

  if (loading === true) return <Spinner />;

  // todo fetch from BE
  // let seconds = 20;
  return (
    <>
      {/* {loading === false && ( */}
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
      {/* )} */}
    </>
  );
};

export default MainSection;
