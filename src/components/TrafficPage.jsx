import React from "react";
import "./TrafficPage.css";

function TrafficPage() {
  // Camera Stream
  //     useEffect(() => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true })
  //     .then((stream) => {
  //       videoRef.current.srcObject = stream;
  //     });
  // }, []);
  return (
    <div className="traffic-container">
      <div className="cctv-grid">
        {[1, 2, 3, 4].map((cam) => (
          <div className="camera-card" key={cam}>
            <div className="camera-title text-white">
              <span className="dot"></span>
              CCTV {cam}
            </div>

            {/* Replace this box with your live stream */}
            <div className="video-frame">
              <video autoPlay muted playsInline className="video-feed" />
              {/* Camera Stream */}
              {/* <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="video-feed"
              /> */}
            </div>

            <p className="car-count text-white">
              Detected Cars: <span>{cam * 3}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="traffic-panel">
        <div className="panel-header text-white">TRAFFIC 1</div>

        <div className="vehicle-info">
          🚗 <span className="text-white">5</span>
        </div>

        <div className="light-status">
          <div className="light-item text-white">
            <span className="green"></span>
            15s
          </div>

          <div className="divider"></div>

          <div className="light-item text-white">
            <span className="yellow"></span>
            15s
          </div>

          <div className="divider"></div>

          <div className="light-item text-white">
            <span className="red"></span>
            15s
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrafficPage;
