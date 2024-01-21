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
import store from "./core/store";
function App() {
  const baseUrl = "/http://127.0.0.1:8000/api";
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/find" element={<ChooseItem />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/occasion" element={<Occasion />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
