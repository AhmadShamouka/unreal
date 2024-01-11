import React, { useState, PureComponent } from "react";
import "./styleDashboard.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const barChartData = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 2200, amt: 400 },
    { name: "Page c", uv: 100, pv: 200, amt: 2400 },
  ];
  const PieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];
  const renderPieChart = () => (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={PieData}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
  const renderBarChart = () => (
    <BarChart width={500} height={300} data={barChartData}>
      <XAxis dataKey="name" stroke="#84d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="#884d8" barSize={30} />
    </BarChart>
  );

  return (
    <div className="dashboard flex">
      <div className="side-nav flex center">
        <div className="side-title">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="side-links flex center">
          <a onClick={() => handlePageChange("home")}>Home</a>
          <a onClick={() => handlePageChange("page1")}>Users</a>
          <a onClick={() => handlePageChange("page2")}>Clothes</a>
          <a onClick={() => handlePageChange("page3")}>Trails</a>
        </div>
      </div>

      <div className="dashboard-container flex center">
        <h2>Welcome to the Admin Dashboard!</h2>
        <div className="home-container flex center">
          <div className="home-users flex center">432 User</div>
          <div className="home-users flex center">5000 Occasion</div>
          <div className="home-users flex center">1323 Trails</div>
        </div>
        <div className="charts-container flex center">
          <div className="BarChart">{renderBarChart()}</div>
          <div className="PieChart">{renderPieChart()}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
