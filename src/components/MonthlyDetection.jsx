import BarChartComponent from "./BarChartComponent";

function MonthlyDetection() {
  return (
    <div className="mx-auto card mb-2">
      <div className="card" style={{ background: "rgb(25, 25, 42)" }}>
        <div className="card-body">
          <h5 className="card-title text-white">Monthly Detection</h5>
          <div className="">
            <BarChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MonthlyDetection;
