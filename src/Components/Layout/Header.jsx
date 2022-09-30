import React from "react";


const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
          <div className="container">
            <a href="/">
              <div >
                <img className="logo_image" src="safeMoon.png" alt=" " width={60} />
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Our Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Swap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Merch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Partners
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Markets
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    How to buy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
