import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login2');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/" style={{ fontSize: '1.5rem' }}>
          PathShala
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ gap: '20px', fontSize: '1rem' }}>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item" style={{width:'100%'}}>
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
            <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"style={{width:'10vw'}}>
    Practice
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/">Quizzes</a>
    <a className="dropdown-item" href="/">Prev. Paper</a>
    <a className="dropdown-item" href="/">Guide</a>
  </div>
</div>
          </ul>
        </div>
        <div className="login">
          <button
            type="button"
            className="btn btn-secondary glowing-button"
            style={{ backgroundColor: '#FF4500',width:'auto' }}
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
