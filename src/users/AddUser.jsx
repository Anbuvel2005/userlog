import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function AddUser() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-success text-white text-center rounded-top-4">
              <h4 className="mb-0">Register New User</h4>
            </div>

            <div className="card-body p-4">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter full name"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Choose a username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email address"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    required
                  />
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button type="submit" className="btn btn-success px-4">
                    Save
                  </button>

                  <Link to="/" className="btn btn-outline-secondary px-4">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
