import React from 'react' 
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <> 
      <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" href="#">Hospital Management</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white " to="/AdminPage">Admin</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/DoctorPage">Doctor</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="/PatientPage">Patient</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar