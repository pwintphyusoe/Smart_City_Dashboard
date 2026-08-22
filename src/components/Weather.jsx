function Weather() {
  return (
    <div className="card mb-3" style={{ background: "rgb(77, 73, 92)" }}>
      <div className="row g-0">
        <div className="col-md-4 text-center">
          <h5 className="m-3" style={{ color: "rgb(126, 176, 245)" }}>
            WEATHER
          </h5>
          <div className="mt-5 d-flex align-items-center justify-content-center">
            <i className="fa-solid fa-cloud fa-4x text-light"></i>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-white">18 C</h5>
            <div className="card-text">
              <p className="text-white">Light Rain</p>
              <p className="text-white">Humidity : 50%</p>
              <p className="text-white">WInd : 8 km/h</p>
              <p className="text-white">Feels like : 18 C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
