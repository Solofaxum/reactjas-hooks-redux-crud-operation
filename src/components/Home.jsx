import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  const users = useSelector((state) => state.users);
  console.log(`this is data from users : ${JSON.stringify(users)}`);
  return (
    <div className="container">
      <button className="btn btn-success my-3">Create New login</button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-sm btn-primary">Edit</button>
                <button className="btn btn-sm btn-danger ms-2" type="button">Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
}

export default Home;
