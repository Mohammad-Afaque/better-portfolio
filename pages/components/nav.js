import React from "react";

function Nav() {
  const [show, setShow] = React.useState();



  return (
    <header>
      <div
        onClick={() => setShow(!show)}
        className={`menu-btn ${show ? "close" : "show"}`}
      >
        <div className={`btn-line ${show ? "show" : ""}`}></div>
        <div className={`btn-line ${show ? "show" : ""}`}></div>
        <div className={`btn-line ${show ? "show" : ""}`}></div>
      </div>

      <nav className={`menu ${show ? "show" : ""}`}>
        <div className={`menu-branding ${show ? "show" : ""}`}>
          <div className="portrait"></div>
        </div>
        <ul className={`menu-nav ${show ? "show" : ""}`}>
          <li className={`nav-item  ${show ? "show" : ""}`}>
            <a className="nav-link" href={"/"}>
              Home
            </a>
          </li>
          <li className={`nav-item  ${show ? "show" : ""}`}>
            <a className="nav-link" href={"/about"}>
              About
            </a>
          </li>
          <li className={`nav-item  ${show ? "show" : ""}`}>
            <a href={"/work"} className="nav-link">
              My Work
            </a>
          </li>
          <li className={`nav-item  ${show ? "show" : ""}`}>
            <a href={"/contact"} className="nav-link">
              How To Reach Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
