import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";
import { useCharService } from "../../../shared/hooks/CharService";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function Login() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const { characters } = useCharService();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(name.trim().toLocaleLowerCase(), status.trim(), characters);

    if (success) {
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Credenciales inválidas",
        text: "Verifica el nombre y estado del personaje.",
        confirmButtonColor: "#dc3545",
        background: "#1e1e2f",
        color: "#fff",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%", backgroundColor: "#1e1e2f", border: "1px solid #343a40" }}>
        <h2 className="text-center mb-4 text-white">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre del personaje</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              placeholder="Ej: Rick Sanchez"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Estado</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              placeholder="Ej: Alive, Dead o Unknown"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
