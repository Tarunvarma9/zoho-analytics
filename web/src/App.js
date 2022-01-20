import logo from "./logo.svg";
import "./App.css";
// import Profile from './components/profile/Profile';
// import LoginForm from './components/login/LoginForm';
import Profile from "./components/profile/Profile";
import LoginForm from "./components/login/LoginForm";
import history from "./components/history";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Cart from "./components/dashboard/Cart";
import CardFlippy from "./components/dashboard/CardFlippy";
import ZohoD from "./components/dashboard/ZohoD";
import ZohoDashboard from "./components/dashboard/ZohoDashboard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<ZohoDashboard/>} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/dashboard" element={<ZohoD />} />
        </Routes>
      </Router>
      {/* <CardFlippy/> */}
    </>
  );
}

export default App;
