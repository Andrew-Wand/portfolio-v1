import { useState } from "react";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const openMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        id="mobileNav"
        className={
          !isOpen
            ? "text-center h-16 overflow-hidden transition-[height] ease duration-[400ms] lg:hidden fixed bg-[#ed6a5a] w-full z-10 shadow-md"
            : "text-center h-screen overflow-hidden transition-[height] ease duration-[400ms] lg:hidden fixed bg-[#ed6a5a] w-full z-10 text-[#2d2d2d]"
        }
      >
        <div id="mobileNavWrapper">
          <nav className="mobileNav">
            <ul className="mt-28">
              <li className="mb-16">
                <a className="text-2xl" href="#home" onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li className="mb-16">
                <a href="#about" className="text-2xl" onClick={closeMobileMenu}>
                  About
                </a>
              </li>
              <li className="mb-16">
                <a
                  href="#skills"
                  className="text-2xl"
                  onClick={closeMobileMenu}
                >
                  Skills
                </a>
              </li>
              <li className="mb-16">
                <a
                  href="#projects"
                  className="text-2xl"
                  onClick={closeMobileMenu}
                >
                  Projects
                </a>
              </li>
              <li className="mb-16">
                <a href="mailto:awanddev@gmail.com" className="text-2xl">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mobileMenuLink text-center lg:hidden fixed w-full h-16 z-20 ">
        <label className="btn btn-square swap swap-rotate right-[-35%] top-2 bg-transparent border-0 ">
          {!isOpen ? (
            <input type="checkbox" onClick={openMobileMenu} />
          ) : (
            <input type="checkbox" onClick={openMobileMenu} checked />
          )}

          <svg
            className="swap-off fill-current p-2 text-[#2d2d2d]"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current p-2 text-[#2d2d2d]"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </>
  );
}

export default MobileNav;
