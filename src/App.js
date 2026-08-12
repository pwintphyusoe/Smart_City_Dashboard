import "./App.css";
import AirPollution from "./components/AirPollution.jsx";
import Card from "./components/Card.jsx";
import Flood from "./components/Flood.jsx";
import Header from "./components/Header.jsx";
import MonthlyAlert from "./components/MonthlyAlert.jsx";
import MonthlyDetection from "./components/MonthlyDetection.jsx";
import SideTab from "./components/SideTab.jsx";
import Smoke from "./components/Smoke.jsx";
import Weather from "./components/Weather.jsx";
import Alert from "./components/Alert.jsx";
import SmokeDetected from "./components/SmokeDetected.jsx";
import FloodDetection from "./components/FloodDetection.jsx";
import AirDetection from "./components/AirDetection.jsx";

function App() {
  return (
    <div className="container-fluid" style={{ background: "rgb(57, 57, 57)" }}>
      <div className="row">
        <div className="col-2">
          <SideTab />
        </div>
        <div className="col-10">
          <Header />
          <div className="row">
            <div className="col-8">
              <Card />
              <div className="row">
                <div className="col">
                  <MonthlyDetection />

                  <MonthlyAlert />
                </div>
                <div className="col">
                  <Smoke />
                  <Flood />
                  <AirPollution />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <Weather />
              </div>
              <div className="row">
                <Alert />
              </div>
              <div className="row">
                <SmokeDetected />
              </div>
              <div className="row">
                <FloodDetection />
              </div>
              <div className="row">
                <AirDetection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
