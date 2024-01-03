import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import "./styles/index.css";
import "./styles/colors.css";

import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/Signup";
import Landing from "./pages/Landing/Landing";
import Occasion from "./pages/Occasion/Occasion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<SignUp />} />

          <Route path="/occasion" element={<Occasion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
