// import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  // const [isNavExpanded, setIsNavExpanded] = useState("false");
  const mobileMenuExpanded = () => {
    let menu = document.querySelector("header > ul");
    if (document.querySelector("header input").checked) {
      menu.classList.add("active-mobile-menu-expanded");
    } else {
      menu.classList.remove("active-mobile-menu-expanded");
    }
  };

  return (
    <header className="max-width-1440 mx-auto d-flex justify-content-between align-items-center px-3">
      <a
        href="/"
        className="logo-container px-3 py-5 d-flex align-items-center"
      >
        <img src="/images/Logo_without_bg.svg" alt="Deep Patel Logo" />
      </a>
      <label htmlFor="check" className="burger-menu-bar">
        <input type="checkbox" id="check" onChange={mobileMenuExpanded} />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="mb-0">
        <li className="ms-md-4">
          <Link
            to="/about"
            className="poppins dark-navy-blue text-capitalize font-weight-500"
          >
            about
          </Link>
        </li>
        <li className="ms-md-4">
          <Link
            to="/portfolio"
            className="poppins dark-navy-blue text-capitalize font-weight-500"
          >
            work
          </Link>
        </li>
        <li className="ms-md-4">
          <Link
            to="/contact"
            className="poppins dark-navy-blue text-capitalize font-weight-500"
          >
            contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default header;
