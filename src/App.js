import Login from "./components/Login";
import Otp from "./components/Otp";
import Success from "./components/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
