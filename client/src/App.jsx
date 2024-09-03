import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Registration";
import LoginPage from "./pages/Login";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-700 to-[#090a15]">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/all" element={<h1>All users</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
