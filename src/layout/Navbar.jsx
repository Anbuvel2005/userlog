import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Full Stack Application
        </Link>

        <div className="ms-auto">
          <Link className="btn btn-light fw-semibold" to="/adduser">
            + Add User
          </Link>
        </div>
      </div>
    </nav>
  );
}
