import React, { useState, useEffect } from 'react';
import github from '../images/github.png';
import logo from '../images/logo.jpg'

const Navbar = () => {
  const [scroll, setscroll] = useState(false);
  
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 10) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    };
    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  }, []);

  return (
    <div className={`navbar navbar-expand-lg navbar-light bg-white fixed-top ${scroll ? 'shadow' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home"><img src={logo} style={{width:"40px",height:"40px",borderRadius:"50%"}}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <div className="navbar-nav"></div>

            <ul className="navbar-nav mx-auto text-center" style={{fontSize:"20px"}}>
              <li className="nav-item">
                <a className="nav-link" href="#home"><i class="fa-solid fa-house px-2"></i>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about"><i class="fa-solid fa-user px-2"></i>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects"><i class="fa-solid fa-briefcase px-2"></i>Project</a>
              </li>
            </ul>

            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/Zm1thDev" target="_blank">
                  <img src={github} style={{width:"40px",height:"40px"}}/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://drive.google.com/file/d/1DRl4ZRlZq3tqMl9guVY6qGPkJ6ah28_s/view?usp=drive_link" target="_blank">
                  <i class="fa-solid fa-arrow-down" style={{padding:"5px"}}></i>Resume</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;