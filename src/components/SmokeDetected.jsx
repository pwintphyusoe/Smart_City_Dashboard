function SmokeDetected() {
  return (
    <div className="col card mb-2" style={{ background: "rgb(77, 73, 92)" }}>
      <div className="d-flex p-4 row">
        <div className="px-2 col-2 my-auto">
          <i className="fa-solid fa-fire text-white fa-2x"></i>
        </div>
        <div className="ps-3 fw-bold col-7">
          <p className="text-white fs-5">Smoke Detectd</p>
          <p className="text-white">CAM 01</p>
        </div>
        <div className="col-3">
          <p className="text-white">12:01 am</p>
          <p className="text-white">light</p>
        </div>
      </div>
    </div>
  );
}

export default SmokeDetected;
