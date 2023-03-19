import NameAnim from "./animations/NameAnim";

function NavBar() {
  return (
    <div className="hidden lg:block">
      <div className="navbar-wrapper navbar justify-end bg-[#ed6a5a] text-[#111827] h-20 fixed z-20 ">
        <nav>
          <ul className="flex">
            <li className="mr-10">
              <a href="" className="text-2xl">
                Home
              </a>
            </li>
            <li className="mr-10">
              <a href="" className="text-2xl">
                About
              </a>
            </li>
            <li className="mr-10">
              <a href="" className="text-2xl">
                Skills
              </a>
            </li>
            <li className="mr-10">
              <a href="" className="text-2xl">
                Projects
              </a>
            </li>
            <li className="mr-10">
              <a href="" className="text-2xl">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
