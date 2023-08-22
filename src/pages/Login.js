import React, { useState } from "react";

import "./Login.css";

import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/main");
  }

  return (
    <div className="login-contanier">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <h3>GitTinder</h3>
        <input
          placeholder="Digite seu usuário do Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
