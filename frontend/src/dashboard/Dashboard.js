import React, { useState, useEffect } from "react";
import base_url from "../common/base/config";
import "./styleDashboard.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  FaUser,
  FaTshirt,
  FaCalendar,
  FaVideo,
  FaHome,
  FaBacteria,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import LoadingSpinner from "../components/loading/Loading";
import Button from "../common/base/button/Button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("jwtToken");
  const authorization = "Bearer " + token;
  const [currentPage, setCurrentPage] = useState("home");
  const [users, setUsers] = useState([]);
  const [piedata, setPieData] = useState([]);
  const [bardata, setBarData] = useState([]);
  const [occasions, setOccasions] = useState({
    occasion_Type_Counts: [],
    occasion_style_Counts: [],
  });
  const navigate = useNavigate();
  const [clothes, setClothes] = useState([]);
  const [active, setActive] = useState("");
  const [trails, setTrails] = useState([]);
  const [loading, setLoading] = useState(false);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [selectedButton, setSelectedButton] = useState("home");

  const handleButtonChange = (page) => {
    setSelectedButton(page);
  };
  const { admin } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const fetchData = async (url, setData) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: authorization,
        },
      });
      setData(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    const loading = () => {
      if (admin === 1) {
        setLoading(true);
      }
    };
    loading();
  }, []);

  useEffect(() => {
    fetchData(`${base_url}api/admin/getusers`, setUsers);
  }, []);

  useEffect(() => {
    fetchData(`${base_url}api/admin/getoccasions`, setOccasions);
  }, []);

  useEffect(() => {
    fetchData(`${base_url}api/admin/getclothes`, setClothes);
  }, []);

  useEffect(() => {
    fetchData(`${base_url}api/admin/gettrails`, setTrails);
  }, []);

  useEffect(() => {
    setBarData(
      occasions.occasion_style_Counts.map((occasion_style) => ({
        name: occasion_style.style,
        uv: occasion_style.count,
      }))
    );
  }, [occasions]);

  useEffect(() => {
    setPieData(
      occasions.occasion_Type_Counts.map((occasion) => ({
        name: occasion.occasion_type,
        value: occasion.count,
      }))
    );
  }, [occasions]);

  const COLORS = ["#5eb7eb", "#1789c9", "#608faa", "#5f717c", "#04395a"];

  const renderPieChart = () => (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={piedata}
          cx="50%"
          cy="50%"
          outerRadius={120}
          label
        >
          {piedata.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  const renderBarChart = () => (
    <ResponsiveContainer>
      <BarChart data={bardata}>
        <XAxis dataKey="name" stroke="#1789c9" />
        <YAxis stroke="#1789c9" />
        <Tooltip />
        <CartesianGrid stroke="#1789c9" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#1789c9" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`${base_url}api/admin/destroy`, {
        data: {
          id: userId,
        },
        headers: {
          Authorization: authorization,
        },
      });
      fetchData();
    } catch (error) {}
  };
  if ({ loading } == false) {
    return (
      <div className="forbidden flex center">
        <FaBacteria size={100} />
        <h1>GO HOME YOU ARE LOST!</h1>
      </div>
    );
  } else if (Object.keys(users).length === 0) {
    return <LoadingSpinner />;
  } else {
    return (
      <div className="dashboard flex">
        <div className="side-nav">
          <div className="side-title flex center">
            <div className="logo-nav"></div>
            <h2>UNREALFIT</h2>
          </div>
          <div className="side-links link-btn flex center">
            <Button
              text="Home"
              bgColor={selectedButton === "home" ? "blue-bg" : "white-bg"}
              textColor={selectedButton === "home" ? "white-text" : "blue-text"}
              onClick={() => {
                handlePageChange("home");
                handleButtonChange("home");
              }}
            />
            <Button
              text="Users"
              bgColor={selectedButton === "users" ? "blue-bg" : "white-bg"}
              textColor={
                selectedButton === "users" ? "white-text" : "blue-text"
              }
              onClick={() => {
                handlePageChange("users");
                handleButtonChange("users");
              }}
            />
            <Button
              text="Occasions"
              bgColor={selectedButton === "occasions" ? "blue-bg" : "white-bg"}
              textColor={
                selectedButton === "occasions" ? "white-text" : "blue-text"
              }
              onClick={() => {
                handlePageChange("occasions");
                handleButtonChange("occasions");
              }}
            />
          </div>
          <div className="side-links logout-btn flex center">
            <Button
              text="Log Out"
              bgColor="white-bg"
              textColor="blue-text"
              onClick={() => {
                handleLogOut();
              }}
            />
          </div>
        </div>
        {currentPage === "home" && (
          <div id="clothes" className="dashboard-container flex center">
            <div className="home-container flex center">
              <div className="home-users-container">
                <div className="home-users flex center">
                  <FaUser />
                  <h4>{users?.count} User</h4>
                </div>
              </div>
              <div className="home-users-container">
                <div className="home-users flex center">
                  <FaCalendar />
                  <h4> {occasions?.count} Occasion</h4>
                </div>
              </div>
              <div className="home-users-container">
                <div className="home-users flex center">
                  <FaTshirt />
                  <h4>{clothes?.count} Clothes</h4>
                </div>
              </div>
              <div className="home-users-container">
                <div className="home-users flex center">
                  <FaVideo />
                  <h4>{trails?.count} Trails</h4>
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
          <div id="users" className="dashboard-container ">
            <h1>Users</h1>
            {users.response && users.response.length > 0 ? (
              <table className="user-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Country</th>
                    <th>Age</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.response.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.sex}</td>
                      <td>{user.country}</td>
                      <td>{user.age}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="delete-btn"
                        >
                          Delete User
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No users found.</p>
            )}
            <div className="PieChart flex center"></div>
          </div>
        )}
        {currentPage === "occasions" && (
          <div id="users" className="dashboard-container ">
            <h1>Occasions</h1>
            {occasions.response && occasions.response.length > 0 ? (
              <table className="user-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Occasion Type</th>
                    <th>User</th>
                    <th>Style</th>
                    <th>Budget Range</th>
                  </tr>
                </thead>
                <tbody>
                  {occasions.response.map((occasion) => (
                    <tr key={occasion.id}>
                      <td>{occasion.id}</td>
                      <td>{occasion.occasion_type}</td>
                      <td>{occasion.user_id}</td>
                      <td>{occasion.style}</td>
                      <td>{occasion.budget_range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No users found.</p>
            )}
            <div className="PieChart flex center"></div>
          </div>
        )}
      </div>
    );
  }
};

export default Dashboard;
