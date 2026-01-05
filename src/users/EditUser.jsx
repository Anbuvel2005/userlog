import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user); // ✅ FIX
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`); // ✅ FIX
    setUser(result.data);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-warning text-dark text-center rounded-top-4">
              <h4 className="mb-0">Edit User</h4>
              <small>User ID: {id}</small>
            </div>

            <div className="card-body p-4">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
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
                    placeholder="Enter your username"
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
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    required
                  />
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button type="submit" className="btn btn-primary px-4">
                    Update
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
