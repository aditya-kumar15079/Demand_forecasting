import React from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { format } from "date-fns";

const SalesChart = () => {
  const data = useSelector((state) => state.forecastData.value)?.map((item) => ({
    ...item,
    formattedDate: format(new Date(item.CALENDAR_DAY), "dd-MMM-yy"),
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="formattedDate" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="TimeGPT" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
