import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/index.css";
import "./styles/colors.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/Signup";
import Landing from "./pages/Landing/Landing";
import Occasion from "./pages/Occasion/Occasion";
import ChooseItem from "./pages/ChooseItem/ChooseItem";
import Brand from "./pages/Brand/Brand";
import Dashboard from "./dashboard/Dashboard";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logoutSuccess } from "./pages/Login/loginSlice";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("jwtToken");

  // useEffect(() => {
  //   if (token) {
  //     dispatch(loginSuccess());
  //   } else {
  //     dispatch(logoutSuccess());
  //   }
  // }, [dispatch, token]);

  return (
    <div className="App">
      <BrowserRouter>
        <GoogleOAuthProvider clientId="214860979641-6s3sn25vii3ng4oq8hc944f9s0cou2qj.apps.googleusercontent.com">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/find" element={<ChooseItem />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/occasion" element={<Occasion />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
