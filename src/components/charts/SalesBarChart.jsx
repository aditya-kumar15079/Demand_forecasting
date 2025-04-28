import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SalesBarChart = () => {
  const data = [
    { name: "Jan", point01: 30000, point02: 20000 },
    { name: "Feb", point01: 45000, point02: 25000 },
    { name: "Mar", point01: 75000, point02: 40000 },
    { name: "Apr", point01: 35000, point02: 30000 },
    { name: "May", point01: 60000, point02: 35000 },
    { name: "Jun", point01: 70000, point02: 45000 },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="point01" fill="#8884d8" />
          <Bar dataKey="point02" fill="#ff6384" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesBarChart;
