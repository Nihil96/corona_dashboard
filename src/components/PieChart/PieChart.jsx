import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

import styles from "./PieChart.module.css";

const PieChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const pie = confirmed ? (
    <Pie
      height={200}
      width={200}
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: true, position: "bottom" },
        title: {
          display: true,
          text: `pie visualization for ${country}`,
        },
      }}
    />
  ) : null;

  const doughnut = confirmed ? (
    <Doughnut
      height={200}
      width={200}
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: true, position: "bottom" },
        title: {
          display: true,
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {pie}
      {doughnut}
    </div>
  );
};

export default PieChart;
