import React, { useState } from "react";
import "./styleDashboard.css";
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
          <div className="home-users"></div>
          <div className="home-users"></div>
          <div className="home-users"></div>
        </div>
        <div className="chart"></div>
        <p>
          {currentPage === "home" ? "the home page" : `Page ${currentPage}`}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
