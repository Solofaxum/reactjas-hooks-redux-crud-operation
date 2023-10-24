import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

export default function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((u) => u.id === id);
  const { name, email } = existingUser;
  const navigate = useNavigate();

  const [newName, setName] = useState(name);
  const [newEmail, setEmail] = useState(email);
  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: newName,
        email: newEmail,
      })
    );
    navigate('/');
  };
  return (
    <div className="d-flex w-100 vh-100 justfy-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>UPDATE USER INFO</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Your name here"
              className="form-control"
              value={newName}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="your email here"
              className="form-control"
              value={newEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn-btn-info" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
