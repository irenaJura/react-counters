import React from "react";

const Navbar = props => {
  const { totalCounters } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="https://localhost:3000">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
