import { useEffect, useState } from "react";
import styles from "./ChargingSection.module.css";
import Timer from "../../../components/timer/Timer";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import ErrorPage from "../../../components/error-page/ErrorPage";

const MainSection: React.FC = () => {
  const [msg, setMsg] = useState<any>();
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(null);
  const url = `http://220-km.com:8080/device/start`;

  const start = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setMsg(response);
        console.log(response);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (error) return <p>Error server!</p>;

  if (loading)
    return (
      <div className={styles.load}>
        <ThreeDots color="#04AA6D" height={70} width={70} />
      </div>
    );

  return (
    <div className={styles.chargingBox}>
      <div className={styles.contTimer}>
        <button
          onClick={start}
          className={loading ? styles.disaleBtn : styles.btnPay}
        >
          start
        </button>
        {msg?.data.message === "success" && <Timer seconds={10} />}
        {msg?.data?.message === "error" && (
          <ErrorPage
            errorHeader="Device is offline"
            errorBody="Sorry! Device is offline. Please, try later"
          />
        )}
      </div>
    </div>
  );
};

export default MainSection;
