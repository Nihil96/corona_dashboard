import React from "react";
import { Typography, Paper } from "@material-ui/core";
import styles from "./TodayCases.module.css";

const TodayCases = ({ todayCases }) => {
  return (
    <div className={styles.container}>
      <Typography color="textSecondary" variant="h4" component="h1">
        The world today
      </Typography>

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
      </Paper>
    </div>
  );
};

export default TodayCases;
