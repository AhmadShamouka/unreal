import React, { useState } from "react";
import "./styleDashboard.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

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
  ];

  const renderPieChart = () => (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={PieData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        ></Pie>
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
        <div className="side-title flex center">
          <div className="logo-nav" href="/"></div>
          <h1>UNREALFIT</h1>
          <hr className="dash-hr-line" />
        </div>

        <div className="side-links flex center">
          <a href="/" onClick={() => handlePageChange("home")}>
            Dashboard
          </a>
          <a href="/" onClick={() => handlePageChange("page1")}>
            Users
          </a>
          <a href="/" onClick={() => handlePageChange("page2")}>
            Clothes
          </a>
          <a href="/" onClick={() => handlePageChange("page3")}>
            Trails
          </a>
        </div>
      </div>

      <div className="dashboard-container flex center">
        <h2>Welcome to the Admin Dashboard!</h2>
        <div className="home-container flex center">
          <div className="home-users-container">
            <div className="home-users flex center">432 User</div>
          </div>
          <div className="home-users-container">
            <div className="home-users flex center">432 Occasions</div>
          </div>
          <div className="home-users-container">
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
