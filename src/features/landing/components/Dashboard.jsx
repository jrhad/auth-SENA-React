import React from "react";
import { useAuth } from "../../auth/hooks/UseAuth";

function Dashboard() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="dropdown text-end me-3">
      <button
        className="btn btn-dark dropdown-toggle d-flex align-items-center"
        type="button"
        id="userDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={user.image}
          alt={user.name}
          className="rounded-circle me-2"
          width="40"
          height="40"
          style={{ objectFit: "cover", border: "2px solid #6c757d" }}
        />
        <span className="text-white">{user.name}</span>
      </button>

      <ul
        className="dropdown-menu dropdown-menu-dark dropdown-menu-end shadow"
        aria-labelledby="userDropdown"
      >
        <li className="dropdown-item-text">
          <strong>Estado:</strong> {user.status}
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li>
          <button className="dropdown-item text-danger" onClick={logout}>
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
