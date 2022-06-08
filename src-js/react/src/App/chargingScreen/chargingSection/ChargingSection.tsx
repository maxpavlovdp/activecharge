import { useEffect, useState } from "react";
import styles from "./ChargingSection.module.css";
import Timer from "../../../components/timer/Timer";
import axios from "axios";
import ErrorPage from "../../../components/error-page/ErrorPage";
import { useTranslation } from "react-i18next";
import Spinner from "../../../components/spinner/Spinner";
import { useAppSelector } from "../../../hooks/reduxHooks";

const MainSection: React.FC = () => {
  const [loading, setLoading] = useState<any>(true);

  const [secondsTime, setSecondsTime] = useState<any>();
  const secondsUrl = `${process.env.REACT_APP_LINK_SERVE}device/getChargingDurationLeftSecs`;
  const { t } = useTranslation();

  const { isLoadingOverload, error } = useAppSelector(
    (state) => state.fetchReducer
  );

  useEffect(() => {
    console.log(isLoadingOverload);
    if (isLoadingOverload === false) {
      axios
        .get(secondsUrl)
        .then((response) => {
          setSecondsTime(response.data.data);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  if (error)
    return (
      <ErrorPage errorHeader={t("errorHeader")} errorBody={t("errorBody")} />
    );

  if (loading === true) return <Spinner />;

  // todo fetch from BE
  // let seconds = 20;
  return (
    <>
      {loading === false && (
        <div className={styles.chargingBox}>
          <div className={styles.contTimer}>
            <Timer seconds={secondsTime} />
          </div>
        </div>
      )}
    </>
  );
};

export default MainSection;
