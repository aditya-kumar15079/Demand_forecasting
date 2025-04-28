import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ComparisonChart = () => {
  const data = [
    { name: "JAN", productA: 300, productB: 200 },
    { name: "FEB", productA: 500, productB: 400 },
    { name: "MAR", productA: 700, productB: 600 },
    { name: "APR", productA: 600, productB: 500 },
    { name: "MAY", productA: 400, productB: 300 },
    { name: "JUN", productA: 200, productB: 250 },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="productA"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
          <Line
            type="monotone"
            dataKey="productB"
            stroke="#ff6384"
            fill="#ff6384"
            fillOpacity={0.3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonChart;
