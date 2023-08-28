import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "./Main.css";

import logo from "../assets/logo.png";
import deslike from "../assets/deslike.png";
import like from "../assets/like.png";

export default function Main() {
  let { id } = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs/${id}", {
        headers: {
          user: id,
        },
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [id]);

  return (
    <div className="main-container">
      <img src={logo} alt="GitTinder" />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src="{user.avatar}" alt="{user.name}" />
            <footer>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
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
        ))}
      </ul>
    </div>
  );
}
