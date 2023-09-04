import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top" >
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            Snaprint.ID
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#produk ">
                  Product
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About us
                </a>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>



            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
