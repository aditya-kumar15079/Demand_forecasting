import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";
import styles from "./MarketShareChart.module.css";

const MarketShareChat = () => {
  const receivedPercent = 40;

  const data = [
    { name: "Received", value: receivedPercent, fill: "#8884d8" },
    // { name: "Spent", value: 100 - receivedPercent, fill: "#e2e8f0" },
  ];

  return (
    <div className={styles.LegendchartContainer}>
      <ResponsiveContainer width="100%" height={240}>
        <RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="100%" barSize={20} data={data} startAngle={90} endAngle={450}>
          <RadialBar background={{ fill: "#e2e8f0" }} dataKey="value" />
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          {/* <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className={styles.percentageText}>
            {receivedPercent}%
          </text> */}
          <Legend />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketShareChat;
