import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./TodayCases.module.css";
// import CountUp from "react-countup";

const TodayCases = ({ todayCases }) => {
  if (!todayCases.todayCases) {
    return "Loading data";
  }

  return (
    <div className={styles.container}>
      <Typography className={styles.heading}>The world today</Typography>

      <>
        <Typography className={styles.text}>today cases</Typography>
        <Typography className={styles.typo1}>
          {todayCases.todayCases.toLocaleString("en")}
        </Typography>
      </>

      <>
        <Typography className={styles.text}>today critical</Typography>
        <Typography className={styles.typo3}>
          {todayCases.critical.toLocaleString("en")}
        </Typography>
      </>

      <>
        <Typography className={styles.text}>today deaths</Typography>
        <Typography className={styles.typo2}>
          {todayCases.todayDeaths.toLocaleString("en")}
        </Typography>
      </>
    </div>
  );
};

export default TodayCases;
