import React, { useState } from "react";
import "./styleDashboard.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

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
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={PieData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#ffff"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
  const renderBarChart = () => (
    <BarChart width={500} height={300} data={barChartData}>
      <XAxis dataKey="name" stroke="#ffff" />
      <YAxis stroke="#ffff" />
      <Tooltip />
      <CartesianGrid stroke="#ffff" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="#ffff" barSize={30} />
    </BarChart>
  );

  return (
    <div className="dashboard flex">
      <div className="side-nav flex center">
        <div className="side-title">
          <h1>Dashboard</h1>
        </div>
        <div className="side-links flex center">
          <a onClick={() => handlePageChange("home")}>Home</a>
          <a onClick={() => handlePageChange("page1")}>Users</a>
          <button onClick={() => handlePageChange("page2")}>Clothes</button>
          <button onClick={() => handlePageChange("page3")}>Trails</button>
        </div>
      </div>

      <div className="dashboard-container flex center">
        <h2>Welcome to the Admin Dashboard!</h2>
        <div className="home-container flex center">
          <div className="home-users-container">
            <label className="home-label flex center">Users</label>
            <div className="home-users flex center">432 User</div>
          </div>
          <div className="home-users-container">
            <label className="home-label flex center">Occasions</label>
            <div className="home-users flex center">432 Occasions</div>
          </div>
          <div className="home-users-container">
            <label className="home-label flex center">Trails</label>
            <div className="home-users flex center">432 Trails</div>
          </div>
        </div>
        <div className="charts-container flex center">
          <div className="BarChart flex center">{renderBarChart()}</div>
          <div className="PieChart flex center">{renderPieChart()}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
