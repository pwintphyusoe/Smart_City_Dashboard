import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import SideTab from "./components/SideTab.jsx";
import MonitoringPage from "./components/MonitoringPage.jsx";
import MainPage from "./components/MainPage.jsx";
import MonthlyAlert from "./components/MonthlyAlert.jsx";
import TrafficPage from "./components/TrafficPage.jsx";
import AlertPage from "./components/AlertPage.jsx";
import FloodPage from "./components/FloodPage.jsx";

function App() {
  return (
    <div className="container-fluid" style={{ background: "#22252f" }}>
      <div className="row">
        <div className="col-2">
          <SideTab />
        </div>
        <div className="col-10">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/traffic" element={<TrafficPage />} />
            <Route path="/monitoring" element={<MonitoringPage />} />
            <Route path="/flood" element={<FloodPage />} />
            <Route path="/alert" element={<AlertPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
