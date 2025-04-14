import React, { useState, useEffect } from 'react';
import { Select, DatePicker, Button, Card, Row, Col } from 'antd';
import { Line, Column } from '@ant-design/charts';
import '../index.css';

const { Option } = Select;
import { fetchCSVData } from '../DataLoader/DataLoader';

export default function DemandForecastDashboard() {
  // State to hold CSV-based line chart data
  const [lineData, setLineData] = useState([]);
  // State for column chart data (dummy data, can be modified as needed)
  const [columnData, setColumnData] = useState([
 
  ]);

  console.log('Column Data:', columnData);
    console.log('Line Data:', lineData);

  useEffect(() => {
    fetchCSVData()
      .then(result => {
        console.log('CSV Data fetched:', result);
        // For example, assume your CSV has columns "CALENDAR_DAY" and "NET_VALUE"
        if (
          result.data &&
          result.data.length > 0 &&
          result.data[0].CALENDAR_DAY &&
          result.data[0].NET_VALUE
        ) {
          setLineData(result.data);
          setColumnData(result.columns);
          console.log('Line Data:', result.data);
          console.log('Column Data:', result.columns);
        } else {
          console.warn(
            "CSV data doesn't contain the expected 'CALENDAR_DAY' and 'NET_VALUE' fields. Using default dummy data."
          );
          setLineData([
            { CALENDAR_DAY: '2020-01', NET_VALUE: 123 },
            { CALENDAR_DAY: '2020-02', NET_VALUE: 145 },
            { CALENDAR_DAY: '2020-03', NET_VALUE: 200 },
            { CALENDAR_DAY: '2020-04', NET_VALUE: 170 },
            { CALENDAR_DAY: '2020-05', NET_VALUE: 190 },
          ]);
        }
      })
      .catch(error => {
        console.error('Error loading CSV data in dashboard:', error);
        // Fallback to default data in case of error:
        setLineData([
          { CALENDAR_DAY: '2020-01', NET_VALUE: 123 },
          { CALENDAR_DAY: '2020-02', NET_VALUE: 145 },
          { CALENDAR_DAY: '2020-03', NET_VALUE: 200 },
          { CALENDAR_DAY: '2020-04', NET_VALUE: 170 },
          { CALENDAR_DAY: '2020-05', NET_VALUE: 190 },
        ]);
      });
  }, []);

  // Chart configuration for the line chart (NET_VALUE Over Time)
  const lineConfig = {
    data: lineData,
    xField: 'CALENDAR_DAY',
    yField: 'NET_VALUE',
    smooth: true,
    height: 300,
    autoFit: true,
  };

  // Chart configuration for the column chart (NET_VALUE Comparison)
  const columnConfig = {
    data: columnData,
    xField: 'category',
    yField: 'NET_VALUE',
    height: 300,
    columnWidthRatio: 0.5,
    label: {
      position: 'middle',
      style: { fill: '#FFFFFF', opacity: 0.6 },
    },
    autoFit: true,
  };

  return (
    <div className="p-4" style={{ padding: '16px' }}>
      <Row gutter={16}>
        {/* Sidebar Filters */}
        <Col xs={24} md={4}>
          <Card>
            <div className="forecastContainer" style={{ marginBottom: 16 }}>
              <Select defaultValue="View Saved Forecast" style={{ width: '100%' }}>
                <Option value="forecast1">View Saved Forecast</Option>
              </Select>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Select defaultValue="Location" style={{ width: '100%' }}>
                <Option value="location1">Location</Option>
              </Select>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Select defaultValue="Sub-location" style={{ width: '100%' }}>
                <Option value="sublocation1">Sub-location</Option>
              </Select>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Select defaultValue="Select Channel" style={{ width: '100%' }}>
                <Option value="channel1">Select Channel</Option>
              </Select>
            </div>
            <div style={{ marginBottom: 16 }}>
              <DatePicker style={{ width: '100%' }} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Select defaultValue="Frequency" style={{ width: '100%' }}>
                <Option value="daily">Daily</Option>
                <Option value="monthly">Monthly</Option>
              </Select>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Select defaultValue="Product Type" style={{ width: '100%' }}>
                <Option value="type1">Product Type</Option>
              </Select>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Select defaultValue="Product Name" style={{ width: '100%' }}>
                <Option value="name1">Product Name</Option>
              </Select>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Select defaultValue="What-If Analysis" style={{ width: '100%' }}>
                <Option value="analysis1">What-If Analysis</Option>
              </Select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button type="default">Reset</Button>
              <Button type="primary">Submit</Button>
            </div>
          </Card>
        </Col>

        {/* Main Dashboard Content */}
        <Col xs={24} md={20}>
          <div style={{ marginBottom: 16 }}>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="welcome">Welcome Back!</p>
          </div>

          {/* Top Stats Cards */}
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Card>
                Total NET_VALUE
                <br />
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>28,345</span>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                Total NET_VALUE without Promotion
                <br />
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>120</span>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                Promotional Impact
                <br />
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>$887.45</span>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                Revenue Increase/Decrease
                <br />
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>46%</span>
              </Card>
            </Col>
          </Row>

          {/* Charts */}
          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            <Col xs={24} md={12}>
              <Card title="NET_VALUE Over Time">
                <Line {...lineConfig} />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="NET_VALUE Comparison">
                <Column {...columnConfig} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
