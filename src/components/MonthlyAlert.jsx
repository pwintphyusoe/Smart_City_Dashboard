import BarChartComponent from "./BarChartComponent";

function MonthlyAlert() {
  return (
    <div className="mx-auto card">
      <div className="card" style={{ background: "rgb(25, 25, 42)" }}>
        <div className="card-body">
          <h5 className="card-title text-white">Monthly ALerts</h5>
          <div className="">
            <BarChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MonthlyAlert;
