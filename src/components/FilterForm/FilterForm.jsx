import React, { useEffect, useState } from "react";
import styles from "./FilterForm.module.css";
import useApi, { METHODS } from "../../hooks/useApi";
import LoadingModal from "../LoadingModal/LoadingModal";
import { useDispatch } from "react-redux";
import { saveForecastData } from "../../reducer/filterslice";
import Markdown from "react-markdown";

const quantities = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 28, 30];
const customerNames = ["DOLLAR GE500114290", "DOLLAR GE500114628", "PUBLIX #0500114974", "SUPER TAR500113874", "WALMART #500113707"];
const customerTypes = ["DSD", "Ecom", "FSV"];
const frequencies = ["D"];

const FilterForm = () => {
  const [filterParams, setFilterParams] = useState({});
  // const [quantity, setQuantity] = useState(null);
  // const [customerName, setCustomerName] = useState("");
  // const [customerType, setCustomerType] = useState("");
  const [frequency, setFrequency] = useState(frequencies[0]);
  const [horizon, setHorizon] = useState(10);
  const [filterPayload, setFilterPayload] = useState(null);
  const [forecastPayload, setForecastPayload] = useState(null);
  const [summaryPayload, setSummaryPayload] = useState(null);
  const dispatch = useDispatch();

  const { data: filteredData, loading: loading1 } = useApi("/filter/", filterPayload, METHODS.POST);
  const { data: forecastData, loading: loading2 } = useApi("/forecast/", forecastPayload, METHODS.POST);
  const { data: summary, loading: loading3 } = useApi("/summarize/", summaryPayload, METHODS.POST);

  const getOption = (list) => {
    return list.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });
  };

  useEffect(() => {
    filteredData &&
      setForecastPayload({
        data: filteredData,
        time_col: "CALENDAR_DAY",
        target_col: "QUANTITY",
        horizon,
        freq: frequency,
      });
  }, [filteredData]);

  useEffect(() => {
    console.log("forecastData", forecastData);
    dispatch(saveForecastData(forecastData));
  }, [forecastData]);

  useEffect(() => {
    console.log("summary", summary);
  }, [summary]);

  const submit = () => {
    setFilterPayload({ filters: { CUSTOMER_NAME: "PUBLIX #0500114974", ...filterParams } });
  };

  const reset = () => {
    setFilterParams({});
    setFrequency("D");
    setHorizon(10);
  };

  const retrieveSummary = () => {
    setSummaryPayload({ filtered_data: filteredData, forecast_data: forecastData });
  };

  return (
    <>
      {(loading1 || loading2) && <LoadingModal />}
      <div className={styles.formContainer}>
        {filterParams?.QUANTITY && <label>Quantity:</label>}
        <select
          onChange={(e) => setFilterParams((prev) => ({ ...prev, QUANTITY: e.target.value }))}
          className={styles["select-wrapper"]}
          value={filterParams?.QUANTITY || ""}
        >
          <option disabled selected hidden value="">
            Quantity
          </option>
          {getOption(quantities)}
        </select>

        {filterParams?.CUSTOMER_NAME && <label>Customer name:</label>}
        <select
          onChange={(e) => setFilterParams((prev) => ({ ...prev, CUSTOMER_NAME: e.target.value }))}
          className={styles["select-wrapper"]}
          value={filterParams?.CUSTOMER_NAME || ""}
        >
          <option disabled selected hidden value="">
            Customer name
          </option>
          {getOption(customerNames)}
        </select>

        {filterParams?.CUSTOMER_TYPE && <label>Customer type:</label>}
        <select
          onChange={(e) => setFilterParams((prev) => ({ ...prev, CUSTOMER_TYPE: e.target.value }))}
          className={styles["select-wrapper"]}
          value={filterParams?.CUSTOMER_TYPE || ""}
        >
          <option disabled selected hidden value="">
            Customer type
          </option>
          {getOption(customerTypes)}
        </select>

        <select className={styles["select-wrapper"]}>
          <option>Region</option>
        </select>

        <select className={styles["select-wrapper"]}>
          <option>Country</option>
        </select>

        <select className={styles["select-wrapper"]}>
          <option>Sales Office</option>
        </select>

        <select className={styles["select-wrapper"]}>
          <option>Material Type</option>
        </select>

        <select className={styles["select-wrapper"]}>
          <option>Pack Type</option>
        </select>

        <label>Frequency:</label>
        <select onChange={(e) => setFrequency(e.target.value)} className={styles["select-wrapper"]} value={frequency}>
          <option disabled selected hidden value="">
            Frequency
          </option>
          {getOption(frequencies)}
        </select>

        <label>Horizon*</label>
        <input type="number" value={horizon} onChange={(e) => setHorizon(e.target.value)} className={styles["select-wrapper"]} />

        <div className={styles.buttonGroup}>
          <button onClick={reset} className={styles.resetButton}>
            Reset
          </button>
          <button onClick={submit} className={styles.submitButton}>
            Submit
          </button>
        </div>
        {filteredData && forecastData && (
          <button onClick={retrieveSummary} className={styles.submitButton}>
            Retrieve Summary
          </button>
        )}
      </div>
      {summary && <Markdown>{summary.summary}</Markdown>}
    </>
  );
};

export default FilterForm;
