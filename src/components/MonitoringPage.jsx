import React, { useEffect, useRef } from "react";
import "./MonitoringPage.css";

function MonitoringPage() {
  const mainVideoRef = useRef(null);
  const smokeVideoRef = useRef(null);
  const floodVideoRef = useRef(null);
  const airVideoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        const videoRefs = [
          mainVideoRef,
          smokeVideoRef,
          floodVideoRef,
          airVideoRef,
        ];

        videoRefs.forEach((ref) => {
          if (ref.current) {
            ref.current.srcObject = stream;
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    startCamera();
  }, []);

  return (
    <div className="dashboard">
      {/* Main Live Stream */}
      <div className="live-stream-card">
        <div className="live-header">
          {/* <span className="live-dot"></span> */}
          LIVE STREAM
        </div>

        <video
          ref={mainVideoRef}
          autoPlay
          muted
          playsInline
          className="main-video"
        />
      </div>

      {/* Side Cards */}
      <div className="side-panel">
        <div className="graph-card">
          <h4 className="text-white">Smoke per month</h4>
          <video
            ref={smokeVideoRef}
            autoPlay
            muted
            playsInline
            className="small-video"
          />
        </div>

        <div className="graph-card">
          <h4 className="text-white">Flood per month</h4>
          <video
            ref={floodVideoRef}
            autoPlay
            muted
            playsInline
            className="small-video"
          />
        </div>

        <div className="graph-card">
          <h4 className="text-white">Air Pollution per month</h4>
          <video
            ref={airVideoRef}
            autoPlay
            muted
            playsInline
            className="small-video"
          />
        </div>
      </div>
    </div>
  );
}

export default MonitoringPage;
