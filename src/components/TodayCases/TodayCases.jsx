import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./TodayCases.module.css";
// import CountUp from "react-countup";

// function addCommas(nStr){
//   nStr += '';
//   var x = nStr.split('.');
//   var x1 = x[0];
//   var x2 = x.length > 1 ? '.' + x[1] : '';
//   var rgx = /(\d+)(\d{3})/;
//   while (rgx.test(x1)) {
//    x1 = x1.replace(rgx, '$1' + ',' + '$2');
//   }
//   return x1 + x2;
//  }

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

/* 
      <Paper className={styles.paper}>
        <Typography className={styles.typo1} color="textSecondary" variant="h6">
          today cases:
        </Typography>
        <Typography className={styles.typo2}>
          {todayCases.todayCases}
        </Typography>
      </Paper>

      <Paper className={styles.paper}>
        <Typography className={styles.typo1} color="textSecondary" variant="h6">
          today deaths:
        </Typography>
        <Typography className={styles.typo2}>
          {todayCases.todayDeaths}
        </Typography>
      </Paper>

      <Paper className={styles.paper}>
        <Typography className={styles.typo1} color="textSecondary" variant="h6">
          today critical:
        </Typography>
        <Typography className={styles.typo2}>{todayCases.critical}</Typography>
      </Paper> */
