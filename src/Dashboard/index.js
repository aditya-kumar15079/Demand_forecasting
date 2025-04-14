// src/components/DemandForecastDashboard.js
import { Select, DatePicker, Button, Card, Row, Col } from 'antd';
import { Line, Column } from '@ant-design/charts';
import './index.css';

const { Option } = Select;

export default function DemandForecastDashboard() {
  // Dummy chart data
  const lineData = [
    { date: '2020-01', sales: 123 },
    { date: '2020-02', sales: 145 },
    { date: '2020-03', sales: 200 },
    { date: '2020-04', sales: 170 },
    { date: '2020-05', sales: 190 },
  ];

  // Configuration for the line chart (Sales Over Time)
  const lineConfig = {
    data: lineData,
    xField: 'date',
    yField: 'sales',
    smooth: true,
    height: 300,
  };

  // Dummy data for sales comparison (e.g., with/without promotion)
  const columnData = [
    { category: 'Without Promotion', sales: 120 },
    { category: 'With Promotion', sales: 200 },
  ];

  // Configuration for the column chart (Sales Comparison)
  const columnConfig = {
    data: columnData,
    xField: 'category',
    yField: 'sales',
    height: 300,
    columnWidthRatio: 0.5,
    label: {
      position: 'middle',
      style: { fill: '#FFFFFF', opacity: 0.6 },
    },
  };

  return (
    <div className="dashboard-container" style={{ padding: 16 }}>
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

        {/* Dashboard Main Area */}
        <Col xs={24} md={20}>
          <div style={{ marginBottom: 16 }}>
            <h1 style={{ margin: 0 }}>Dashboard</h1>
            <p>Welcome Back!</p>
          </div>

          {/* Top Stats Cards */}
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Card>
                Total Sales
                <br />
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>28,345</span>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                Total Sales without Promotion
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
              <Card title="Sales Over Time">
                <Line {...lineConfig} />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Sales Comparison">
                <Column {...columnConfig} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
