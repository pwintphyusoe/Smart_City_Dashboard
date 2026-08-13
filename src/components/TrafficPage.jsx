import React, { useEffect, useRef, useState } from "react";
import "./TrafficPage.css";

function TrafficPage() {
  const videoRefs = useRef([]);
  const [cameraError, setCameraError] = useState("");

  useEffect(() => {
    let stream;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        videoRefs.current.forEach((video) => {
          if (video) video.srcObject = stream;
        });
      } catch (error) {
        console.error("Unable to access the webcam:", error);
        setCameraError("Camera access is required to show CCTV feeds.");
      }
    };

    startCamera();

    return () => {
      stream?.getTracks().forEach((track) => track.stop());
      videoRefs.current.forEach((video) => {
        if (video) video.srcObject = null;
      });
    };
  }, []);

  return (
    <div className="traffic-container">
      <div className="cctv-grid">
        {[1, 2, 3, 4].map((cam, index) => (
          <div className="camera-card" key={cam}>
            <div className="camera-title text-white">
              <span className="dot"></span>
              CCTV {cam}
            </div>

            <div className="video-frame">
              <video
                ref={(video) => {
                  videoRefs.current[index] = video;
                }}
                autoPlay
                muted
                playsInline
                className="video-feed"
              />
              {cameraError && <span className="camera-error">{cameraError}</span>}
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
