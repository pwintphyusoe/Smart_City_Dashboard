import React, { useState } from "react";
import "./WaveGraph.css";

const WaveGraph = () => {
  // Dynamic sales data state (12 months)
  const [data, setData] = useState([
    { month: "Jan", sales: 2950 },
    { month: "Feb", sales: 1850 },
    { month: "Mar", sales: 2200 },
    { month: "Apr", sales: 2400 },
    { month: "May", sales: 1900 },
    { month: "Jun", sales: 2300 },
    { month: "Jul", sales: 2500 },
    { month: "Aug", sales: 2550 },
    { month: "Sep", sales: 3650 },
    { month: "Oct", sales: 3350 },
    { month: "Nov", sales: 3750 },
    { month: "Dec", sales: 4250 },
  ]);

  // Chart dimensions & scale parameters
  const svgWidth = 760;
  const svgHeight = 360;
  const paddingLeft = 50;
  const paddingRight = 20;
  const paddingTop = 30;
  const paddingBottom = 30;

  const minY = 1400;
  const maxY = 4900;
  const yTicks = [4900, 4200, 3500, 2800, 2100, 1400];

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;

  // Convert (x, y) data point values into SVG pixel coordinates
  const points = data.map((item, index) => {
    const x = paddingLeft + (index / (data.length - 1)) * chartWidth;
    const y =
      paddingTop + (1 - (item.sales - minY) / (maxY - minY)) * chartHeight;
    return { x, y };
  });

  // Function to build smooth cubic Bézier curves through dynamic points
  const generateSmoothPath = (pts) => {
    if (pts.length === 0) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;

    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i === 0 ? i : i - 1];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2 < pts.length ? i + 2 : i + 1];

      // Smooth control points
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    }
    return d;
  };

  const linePath = generateSmoothPath(points);
  const bottomY = paddingTop + chartHeight;
  const fillPath = `${linePath} L ${points[points.length - 1].x} ${bottomY} L ${points[0].x} ${bottomY} Z`;

  // Example handler to update data randomly
  const randomizeData = () => {
    setData((prev) =>
      prev.map((item) => ({
        ...item,
        sales: Math.floor(Math.random() * (4500 - 1600 + 1)) + 1600,
      })),
    );
  };

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        {/* Y-Axis Labels */}
        <div className="y-axis">
          {yTicks.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>

        {/* Dynamic SVG Graph */}
        <div className="svg-container">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
                <stop offset="80%" stopColor="#2563eb" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Background Fill Gradient */}
            <path d={fillPath} fill="url(#waveGradient)" />

            {/* Dynamic Smooth Wave Line */}
            <path
              d={linePath}
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="4.5"
              strokeLinecap="round"
            />

            {/* Bottom X-Axis Line */}
            <line
              x1={paddingLeft}
              y1={bottomY}
              x2={paddingLeft + chartWidth}
              y2={bottomY}
              stroke="#e5e7eb"
              strokeWidth="1.5"
            />

            {/* X-Axis Ticks */}
            {points.map((pt, i) => (
              <line
                key={i}
                x1={pt.x}
                y1={bottomY}
                x2={pt.x}
                y2={bottomY + 6}
                stroke="#9ca3af"
                strokeWidth="1.5"
              />
            ))}
          </svg>

          {/* X-Axis Labels */}
          <div className="x-axis">
            {data.map((item) => (
              <span key={item.month}>{item.month}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveGraph;
