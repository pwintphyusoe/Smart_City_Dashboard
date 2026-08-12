import FloodWaveGraph from "./FloodWaveGraph";

function Flood() {
  return (
    <div className="mx-auto card mb-2  border-0">
      <div className="card" style={{ background: "rgb(93, 90, 90)" }}>
        <div className="card-body">
          <h5 className="card-title text-white">Flood Per Month</h5>
          <div className="">
            <FloodWaveGraph />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Flood;
