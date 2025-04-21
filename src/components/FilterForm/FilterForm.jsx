import React from "react";
import styles from "./FilterForm.module.css";

const FilterForm = () => {
  return (
    <form className={styles.formContainer}>
      <select className={styles.select}>
        <option>Quantity</option>
      </select>

      <select className={styles.select}>
        <option>Customer Name</option>
      </select>

      <select className={styles.select}>
        <option>Customer Type</option>
        <option>Sales</option>
        <option>Channel</option>
      </select>

      <div className={styles.inputWithIcon}>
        <input
          className={styles.input}
          placeholder="Claender Day"
          type="text"
        />
        <span className={styles.icon}>📅</span>
      </div>

      <select className={styles.select}>
        <option>Region</option>
      </select>

      <select className={styles.select}>
        <option>Sales Office</option>
      </select>

      <select className={styles.select}>
        <option>Pack Type</option>
      </select>

      <div className={styles.buttonGroup}>
        <button type="reset" className={styles.resetButton}>
          Reset
        </button>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
