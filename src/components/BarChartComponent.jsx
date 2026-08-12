import "../App.css";

function BarChartComponent() {
  const data = [
    { month: "Jan", value: 40 },
    { month: "Feb", value: 70 },
    { month: "Mar", value: 50 },
    { month: "Apr", value: 90 },
    { month: "May", value: 60 },
    { month: "June", value: 20 },
    { month: "July", value: 10 },
    { month: "Aug", value: 50 },
    { month: "Sep", value: 70 },
    { month: "Oct", value: 10 },
    { month: "Nov", value: 40 },
    { month: "Dec", value: 20 },
  ];

  return (
    <div className="graphContainer">
      <div className="chart">
        {data.map((item, index) => (
          <div className="bar-container" key={index}>
            <div className="bar" style={{ height: `${item.value * 1.8}px` }}>
              <span>{item.value}</span>
            </div>
            <p className="text-white">{item.month}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BarChartComponent;
