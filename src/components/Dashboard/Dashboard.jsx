// Dashboard.js
import React from "react";
import styles from "./Dashboard.module.css";
import FilterForm from "../FilterForm/FilterForm";
import Card from "../Card/Card";
import SalesChart from "../SalesChart/SalesChart";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <Card>
          <FilterForm />
        </Card>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.grid}>
          <Card title="Total Sales">
            <h1>28,345</h1>
          </Card>
          <Card title="Total Sales without Promotion">
            <h1>120</h1>
          </Card>
          <Card title="Promotional Impact">
            <h1>$887.45</h1>
          </Card>
          <Card title="Revenue Increase/Decrease">
            <h1>46%</h1>
          </Card>
          <Card title="Forecasted Sales">
            <SalesChart />
          </Card>
          <Card title="Sales Comparison (Product Wise)" />
          <Card title="Sales Comparison (Channel Wise)" />
          <Card title="Market Share Distribution" />
          <Card title="Demand Forecast Table" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
