import React from "react";

function NavBar() {
  return (
    <div className="hidden lg:block">
      <div className="navbar-wrapper navbar justify-end bg-base-200">
        <nav>
          <ul className="flex">
            <li className="">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
