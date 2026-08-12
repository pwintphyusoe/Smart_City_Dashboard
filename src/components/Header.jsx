function Header() {
  return (
    <div className="row mb-2">
      <nav className="navbar border border-bottom border-start border-secondary">
        <div className="container-fluid">
          <p className="fs-4 fw-bold" style={{ color: "rgb(143, 38, 228)" }}>
            <i className="fa-solid fa-building-columns fa-2x"></i>Yatanarpon
            Cyber City
          </p>
          <div className="d-flex">
            <p
              className="border border-secondary px-2 mx-3"
              style={{ width: "150px" }}
            >
              <p className="text-white">13 Aug 2026</p>
              <p className="text-white">23:11 AM</p>
            </p>
            <p className="border border-secondary px-2 mx-3">
              <div className="row">
                <div className="col d-flex align-items-center justify-content-center text-white">
                  <i className="fa-solid fa-user fa-2x"></i>
                </div>
                <div className="col">
                  <p className="text-white" style={{ width: "150px" }}>
                    Operator
                  </p>
                  <p className="text-white">Online</p>
                </div>
              </div>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
