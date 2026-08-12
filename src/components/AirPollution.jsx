import AirPollutionWaveGraph from "./AirPollutionWaveGraph";

function AirPollution() {
  return (
    <div className="mx-auto card mb-2 border-0 bg-secondary">
      <div className="card" style={{ background: "rgb(93, 90, 90)" }}>
        <div className="card-body">
          <h5 className="card-title text-white">Air Pollution Per Month</h5>
          <div className="">
            <AirPollutionWaveGraph />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AirPollution;
