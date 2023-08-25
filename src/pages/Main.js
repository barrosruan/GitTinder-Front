import React from "react";
import { useParams } from "react-router-dom";
import "./Main.css";

import logo from "../assets/logo.png";
import deslike from "../assets/deslike.png";
import like from "../assets/like.png";

export default function Main() {
  let { id } = useParams();
  return (
    <div className="main-container">
      <img src={logo} alt="GitTinder" />
      <ul>
        <li>
          <img
            src="https://avatars.githubusercontent.com/u/95625134?v=4"
            alt=""
          />
          <footer>
            <strong>Wollas Romeiro</strong>
            <p> Programador Backend </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={deslike} alt="deslike"></img>
            </button>
            <button type="button">
              <img src={like} alt="like"></img>
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars.githubusercontent.com/u/95625134?v=4"
            alt=""
          />
          <footer>
            <strong>Wollas Romeiro</strong>
            <p> Programador Backend </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={deslike} alt="deslike"></img>
            </button>
            <button type="button">
              <img src={like} alt="like"></img>
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars.githubusercontent.com/u/95625134?v=4"
            alt=""
          />
          <footer>
            <strong>Wollas Romeiro</strong>
            <p> Programador Backend </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={deslike} alt="deslike"></img>
            </button>
            <button type="button">
              <img src={like} alt="like"></img>
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars.githubusercontent.com/u/95625134?v=4"
            alt=""
          />
          <footer>
            <strong>Wollas Romeiro</strong>
            <p> Programador Backend </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={deslike} alt="deslike"></img>
            </button>
            <button type="button">
              <img src={like} alt="like"></img>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
