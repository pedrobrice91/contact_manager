import { useState, useContext } from "react";
import { Context } from "../store/context";

function JoinNow() {
  const { actions } = useContext(Context);

  const [formData, setFormData] = useState({
    nombre_usuario: "",
    email: "",
    contraseña: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.nombre_usuario && formData.email && formData.contraseña) {
      actions.createUser(formData);
    } else {
      alert("Todos los campos son obligatorios.");
    }
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please registrate</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="nombre_usuario"
            name="nombre_usuario"
            placeholder="Nombre"
            value={formData.nombre_usuario}
            onChange={handleChange}
          />
          <label htmlFor="nombre_usuario">Nombre</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="contraseña"
            name="contraseña"
            placeholder="Contraseña"
            value={formData.contraseña}
            onChange={handleChange}
          />
          <label htmlFor="contraseña">Password</label>
        </div>
        <button
          className="btn btn-primary w-100 py-2"
          type="button"
          onClick={handleRegister}
        >
          Registrarse
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
      </form>
    </main>
  );
}

export default JoinNow;
