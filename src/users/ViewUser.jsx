import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, [id]);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-primary text-white text-center rounded-top-4">
              <h4 className="mb-0">User Profile</h4>
              <small>ID: {id}</small>
            </div>

            <div className="card-body p-4">
              <div className="mb-3">
                <label className="form-label fw-bold">Name</label>
                <div className="form-control bg-light">{user.name}</div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Username</label>
                <div className="form-control bg-light">{user.username}</div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <div className="form-control bg-light">{user.email}</div>
              </div>
            </div>

            <div className="card-footer text-center bg-white border-0 pb-4">
              <Link to="/" className="btn btn-outline-primary px-4">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
