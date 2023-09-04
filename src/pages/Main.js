import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import { Link, useParams } from "react-router-dom";

import api from "../services/api";
import "./Main.css";

import logo from "../assets/logo.png";
import dislike from "../assets/deslike.png";
import like from "../assets/like.png";
import macth from "../assets/match.png";

export default function Main() {
  let { id } = useParams();

  const [users, setUsers] = useState([]);
  const [matchDev, setMactchDev] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: id,
        },
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [id]);

  useEffect(() => {
    const socket = io("http://localhost:3333", {
      query: { user: id },
    });

    socket.on("match", (dev) => {
      console.log(dev);
    });
  }, [id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes `, null, {
      headers: { user: id },
    });

    setUsers(users.filter((user) => user._id != id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes `, null, {
      headers: { user: id },
    });

    setUsers(users.filter((user) => user._id != id));
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="GitTinder" />
      </Link>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>
              <div className="buttons">
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="dislike"></img>
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="like"></img>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty"> Acabou :( </div>
      )}

      {matchDev && (
        <div className="match-container">
          <h3 className="madev">Deu Match!</h3>
          <img
            className="avatar"
            src="https://avatars.githubusercontent.com/u/134977355?v=4"
            alt=""
          />
          <strong>Elano Junior</strong>
          <p>Desenvolvedor fronend</p>
          <button tye="button">Fechar</button>
        </div>
      )}
    </div>
  );
}
