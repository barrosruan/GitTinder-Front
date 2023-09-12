import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import { Link, useParams } from "react-router-dom";

import api from "../services/api";
import "./Main.css";

import logo from "../assets/logo.png";
import dislike from "../assets/deslike.png";
import like from "../assets/like.png";

export default function Main() {
  const { id: paramsId } = useParams();

  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: paramsId,
        },
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [paramsId]);

  useEffect(() => {
    const socket = io("http://localhost:3333", {
      query: { user: paramsId },
    });

    socket.on("match", (dev) => {
      setMatchDev(dev);
    });
  }, [paramsId]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes `, null, {
      headers: { user: paramsId },
    });

    setUsers(users.filter((user) => user._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes `, null, {
      headers: { user: id },
    });

    setUsers(users.filter((user) => user._id !== id));
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
          <img className="avatar" src={matchDev.avatar} alt="" />
          <strong>{matchDev.name}</strong>
          <p>{matchDev.bio}</p>
          <button tye="button" onClick={() => setMatchDev(null)}>
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}
