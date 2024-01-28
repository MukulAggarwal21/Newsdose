import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsDose
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
                   <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="stateDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    States
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="stateDropdown">
                    <li><Link className="dropdown-item" to="/UttarPradesh">Uttar Pradesh</Link></li>
                    <li><Link className="dropdown-item" to="/madhyapradesh">Madhya Pradesh</Link></li>
                    <li><Link className="dropdown-item" to="/arunachalpradesh">Arunachal Pradesh</Link></li>
                    <li><Link className="dropdown-item" to="/andhrapradesh">Andhra Pradesh</Link></li>
                    <li><Link className="dropdown-item" to="/assam">Assam</Link></li>
                    <li><Link className="dropdown-item" to="/bihar">Bihar</Link></li>
                    <li><Link className="dropdown-item" to="/chhattisgarh">Chhattisgarh</Link></li>
                    <li><Link className="dropdown-item" to="/goa">Goa</Link></li>
                    <li><Link className="dropdown-item" to="/gujarat">Gujarat</Link></li>
                    <li><Link className="dropdown-item" to="/haryana">Haryana</Link></li>
                    <li><Link className="dropdown-item" to="/himachal">Himachal Pradesh</Link></li>
                    <li><Link className="dropdown-item" to="/jharkhand">Jharkhand</Link></li>
                    <li><Link className="dropdown-item" to="/nagaland">Nagaland</Link></li>
                    <li><Link className="dropdown-item" to="/odisha">Odisha</Link></li>
                    <li><Link className="dropdown-item" to="/rajasthan">Rajasthan</Link></li>
                    <li><Link className="dropdown-item" to="/sikkim">Sikkim</Link></li>
                    <li><Link className="dropdown-item" to="/punjab">Punjab</Link></li>
                    <li><Link className="dropdown-item" to="/tamilnadu">Tamil Nadu  </Link></li>
                    <li><Link className="dropdown-item" to="/tripura">Tripura</Link></li>
                    <li><Link className="dropdown-item" to="/uttrakhand">Uttrakhand</Link></li>
                    <li><Link className="dropdown-item" to="/bengal">West Bengal</Link></li>
                    <li><Link className="dropdown-item" to="/karnataka">Karnataka</Link></li>
                    <li><Link className="dropdown-item" to="/kerala">Kerala</Link></li>
                    <li><Link className="dropdown-item" to="/manipur">Manipur</Link></li>
                    <li><Link className="dropdown-item" to="/meghalaya">Meghalaya</Link></li>
                    <li><Link className="dropdown-item" to="/mizoram">Mizoram</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="roleDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Education
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="roleDropdown">
                    <li><Link className="dropdown-item" to="/students">Students</Link></li>
                    <li><Link className="dropdown-item" to="/professor">Professor</Link></li>
                    <li><Link className="dropdown-item" to="/teachers">Teachers</Link></li>
                    <li><Link className="dropdown-item" to="/exams">Exams</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
