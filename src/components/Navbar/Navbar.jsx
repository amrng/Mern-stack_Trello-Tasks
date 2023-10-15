
import React from 'react'
import { Outlet, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import style from "./Navbar.css"


export default function Navbar() {

  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white"><span className='text-color'>T</span>rello</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/tasks" className="nav-link text-color" aria-current="page">Tasks</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link text-color">Register</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-color">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}
