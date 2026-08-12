function Card() {
  return (
    <div className="row mb-3">
      <div className="col-4 ">
        <div
          className="card border-0 shadow"
          style={{ background: "rgb(68, 66, 67)" }}
        >
          <div className="card-body">
            <h5 className="card-title text-white">Active Camera</h5>
            <h6 className="card-subtitle mb-2 text-info fs-2 text-center">5</h6>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div
          className="card border-0 shadow"
          style={{ background: "rgb(68, 66, 67)" }}
        >
          <div className="card-body">
            <h5 className="card-title text-white">Detection Today</h5>
            <h6 className="card-subtitle mb-2 fs-2 text-success text-center">
              5
            </h6>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div
          className="card border-0 shadow"
          style={{ background: "rgb(68, 66, 67)" }}
        >
          <div className="card-body">
            <h5 className="card-title text-white">Active Alerts</h5>
            <h6 className="card-subtitle mb-2 fs-2 text-danger text-center">
              5
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
