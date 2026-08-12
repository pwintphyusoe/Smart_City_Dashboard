import React from "react";
import Card from "./Card";
import MonthlyDetection from "./MonthlyDetection";
import MonthlyAlert from "./MonthlyAlert";
import Smoke from "./Smoke";
import Flood from "./Flood";
import AirPollution from "./AirPollution";
import Weather from "./Weather";
import Alert from "./Alert";
import SmokeDetected from "./SmokeDetected";
import FloodDetection from "./FloodDetection";
import AirDetection from "./AirDetection";

const MainPage = () => {
  return (
    <div>
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
  );
};

export default MainPage;
