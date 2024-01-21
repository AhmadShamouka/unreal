import React, { useState, useEffect } from "react";
import "./styleDashboard.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { FaUser, FaTshirt, FaCalendar, FaVideo } from "react-icons/fa";

import axios from "axios";

const Dashboard = () => {
  const token = localStorage.getItem("jwtToken");
  const authorization = "Bearer " + token;
  const [currentPage, setCurrentPage] = useState("home");
  const [users, setUser] = useState();
  const [occasions, setOccasion] = useState();
  const [clothes, setClothes] = useState();
  const [trails, setTrails] = useState();
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const handleLoadUsers = async (e) => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/admin/getusers",
          {
            headers: {
              Authorization: authorization,
            },
          }
        );
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoadUsers();
  }, []);
  useEffect(() => {
    const handleLoadUsers = async (e) => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/admin/getoccasions",
          {
            headers: {
              Authorization: authorization,
            },
          }
        );

        setOccasion(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoadUsers();
  }, []);
  useEffect(() => {
    const handleLoadUsers = async (e) => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/admin/getclothes",
          {
            headers: {
              Authorization: authorization,
            },
          }
        );
        setClothes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoadUsers();
  }, []);
  useEffect(() => {
    const handleLoadUsers = async (e) => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/admin/gettrails",
          {
            headers: {
              Authorization: authorization,
            },
          }
        );
        setTrails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoadUsers();
  }, []);
  const barChartData = [
    { name: "Formal", uv: 400, pv: 2400, amt: 2400 },
    { name: "Casual", uv: 300, pv: 2200, amt: 400 },
    { name: "Stylish", uv: 100, pv: 200, amt: 2400 },
  ];
  const PieData = [
    { name: "OutDoor Activity", value: 400 },
    { name: "Beach Vacation", value: 300 },
    { name: "Athletic Activity", value: 300 },
    { name: "Traditional Occastion", value: 200 },
    { name: "Wedding Events", value: 278 },
    { name: "Casual Outing", value: 400 },
    { name: "Party", value: 300 },
    { name: "Graduation Ceremony", value: 300 },
    { name: "Business Meeting", value: 200 },
    { name: "Sleepover", value: 278 },
  ];

  const COLORS = ["#5eb7eb", "#1789c9", "#608faa", "#5f717c", "#04395a"];

  const renderPieChart = () => (
    <ResponsiveContainer width={500} height={300}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={PieData}
          cx="50%"
          cy="50%"
          outerRadius={120}
          label
        >
          {PieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
  const renderBarChart = () => (
    <ResponsiveContainer width={500} height={300}>
      <BarChart data={barChartData}>
        <XAxis dataKey="name" stroke="#1789c9" />
        <YAxis stroke="#1789c9" />
        <Tooltip />
        <CartesianGrid stroke="#1789c9" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#1789c9" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <div className="dashboard flex">
      <div className="side-nav ">
        <div className="side-title flex center">
          <div className="logo-nav"></div>
          <h1>UNREALFIT</h1>
        </div>
        <hr className="dash-hr-line" />
        <div className="side-links flex center">
          <a onClick={() => handlePageChange("home")}>Home</a>
          <a onClick={() => handlePageChange("users")}>Users</a>
          <a onClick={() => handlePageChange("occasions")}>Occasions</a>
          <a onClick={() => handlePageChange("clothes")}>Clothes</a>
        </div>
      </div>

      {currentPage === "home" && (
        <div id="clothes" className="dashboard-container flex center">
          <div className="home-container flex center">
            <div className="home-users-container">
              <div className="home-users flex center">
                <FaUser />
                <h4>&nbsp;{users?.count} User</h4>
              </div>
            </div>
            <div className="home-users-container">
              <div className="home-users flex center">
                <FaCalendar />
                <h4>&nbsp; {occasions?.count} Occasion</h4>
              </div>
            </div>
            <div className="home-users-container">
              <div className="home-users flex center">
                <FaTshirt />
                <h4>&nbsp;{clothes?.count} Clothes</h4>
              </div>
            </div>
            <div className="home-users-container">
              <div className="home-users flex center">
                <FaVideo />
                <h4>&nbsp;{trails?.count} Trails</h4>
              </div>
            </div>
          </div>
          <div className="charts-container flex center">
            <div className="barChart-container flex center">
              <h2>Users Style</h2>
              <div className="BarChart flex center">{renderBarChart()}</div>
            </div>
            <div className="barChart-container flex center">
              <h2>Users Occasions</h2>
              <div className="PieChart flex center">{renderPieChart()}</div>
            </div>
          </div>
        </div>
      )}

      {currentPage === "users" && (
        <div id="users" className="dashboard-container flex center">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {currentPage === "occasions" && (
        <div id="occasions" className="dashboard-container flex center"></div>
      )}
      {currentPage === "clothes" && (
        <div id="occasions" className="dashboard-container flex center">
          {/* Your occasions page content */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
