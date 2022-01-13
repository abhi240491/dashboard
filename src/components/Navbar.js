import React from "react";
function Navbar() {
  return (
    <header className="mb-2">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 ml-auto"></form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown mr-5">
              <a
                href="#"
                className="nav-link dropdown-toggle text-primary"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Year Ending
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a href="#" className="dropdown-item">
                  VASY
                </a>
                <a to="#" className="dropdown-item">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a to="#" className="dropdown-item">
                  Something
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar; //withRouter here is a HOC
