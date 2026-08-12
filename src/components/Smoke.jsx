import WaveGraph from "./WaveGraph";

function Smoke() {
  return (
    <div className="mx-auto card mb-2 border-0 shadow">
      <div className="card" style={{ background: "rgb(43, 42, 69)" }}>
        <div className="card-body">
          <h5 className="card-title text-white">Smoke Per Month</h5>
          <div className="">
            <WaveGraph />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Smoke;
