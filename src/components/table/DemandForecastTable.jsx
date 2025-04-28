import { useSelector } from "react-redux";
import styles from "./DemandForecastTable.module.css";
import React from "react";
import { format } from "date-fns";

const DemandForecastTable = () => {
  // const data = [
  //   {
  //     dateTime: "2025-04-22 10:00",
  //     predictValue: 500,
  //     higherBound: 550,
  //     lowerBound: 450,
  //   },
  //   {
  //     dateTime: "2025-04-22 12:00",
  //     predictValue: 520,
  //     higherBound: 570,
  //     lowerBound: 470,
  //   },
  //   {
  //     dateTime: "2025-04-22 14:00",
  //     predictValue: 480,
  //     higherBound: 530,
  //     lowerBound: 430,
  //   },
  // ];
  const data = useSelector((state) => state.forecastData.value);

  return (
    <div className={styles["container"]}>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Predict Value</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              <td>{format(new Date(row.CALENDAR_DAY), "dd-MMM-yy")}</td>
              <td>{row.TimeGPT}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DemandForecastTable;
