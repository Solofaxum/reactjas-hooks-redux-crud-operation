import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";


export default function Create() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const users = useSelector((state)=>state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleSubmit=(event)=>{
       event.preventDefault();
       dispatch(addUser({id:users[users.length-1].id + 1, name, email}))
   navigate('/')
    }
  return (
    <div className="d-flex w-100 vh-100 justfy-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>ADD NEW USER</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Your name here"
              className="form-control"
              onChange = {e=>setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="your email here"
              className="form-control"
              onChange = {e=>setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn-btn-info" type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Click to submit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="id" name="" placeholder="your ID here" />
            </td>
            <td>
              <input type="email" name="" placeholder="Your EMAIL here" />
            </td>
            <td>
              <input type="name" name="" placeholder="Your NAME here" />
            </td>
            <td>
              <input type="submit" />
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}
