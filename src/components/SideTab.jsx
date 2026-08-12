import { NavLink } from "react-router-dom";

function SideTab() {
  return (
    <div
      className="border border-end border-bottom-0 border-dark"
      style={{ background: "rgb(59, 58, 58)" }}
    >
      <div className="d-flex align-items-center justify-content-center min-vh-100 mx-auto">
        <div className="list-group">
          <NavLink to="/">
            <button
              type="button"
              className="list-group-item list-group-item-action border-0 mb-4 py-4 text-white"
              style={{ width: "200px", background: "rgb(59, 58, 58)" }}
            >
              <i className="fa-solid fa-house"></i>Dashboard
            </button>
          </NavLink>
          <NavLink to="/traffic">
            <button
              type="button"
              className="list-group-item list-group-item-action border-0 mb-4 py-4 text-white"
              style={{ width: "200px", background: "rgb(59, 58, 58)" }}
            >
              <i className="fa-solid fa-traffic-light"></i>Traffic
            </button>
          </NavLink>
          <NavLink to="/monitoring">
            <button
              type="button"
              className="list-group-item list-group-item-action border-0 mb-4 py-4 text-white"
              style={{ width: "200px", background: "rgb(59, 58, 58)" }}
            >
              <i className="fa-solid fa-camera"></i>Monitoring
            </button>
          </NavLink>
          <NavLink to="/flood">
            <button
              type="button"
              className="list-group-item list-group-item-action border-0 mb-4 py-4 text-white"
              style={{ width: "200px", background: "rgb(59, 58, 58)" }}
            >
              <i className="fa-solid fa-house-flood-water"></i>Flood
            </button>
          </NavLink>
          <NavLink to="/alert">
            <button
              type="button"
              className="list-group-item list-group-item-action border-0 mb-4 py-4 text-white"
              style={{ width: "200px", background: "rgb(59, 58, 58)" }}
            >
              <i class="fa-solid fa-triangle-exclamation"></i>Alert
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SideTab;
