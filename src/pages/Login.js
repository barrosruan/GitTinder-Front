import React from "react";
import './Login.css';


import logo from '../assets/logo.png';


export default function Login() {
    return (
        <div className="login-contanier">
            <form>
            <img src={logo} alt="Tindev" />
            <h3>GitTinder</h3>
            <input
            placeholder="Digite seu usuário do Github" />
            <button type="submit">Enviar</button>
            
            
            </form>
        </div>


    );
}
