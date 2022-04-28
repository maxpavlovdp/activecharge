import React from 'react';
import styles from './MainSection.module.css';
import Timer from "../../../../components/timer/Timer";

const MainSection = () => {
  return (
    <div className={styles.chargingBox}>
      <div>
        <Timer seconds={1} />
      </div>
    </div>
  )
}

export default MainSection;