import { useState } from "react";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const openMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        id="mobileNav"
        className={
          !isOpen
            ? "text-center h-[0px] overflow-hidden transition-[height] ease duration-[400ms] lg:hidden"
            : "text-center h-[300px] overflow-hidden transition-[height] ease duration-[400ms] lg:hidden"
        }
      >
        <div id="mobileNavWrapper" className="border-b-2 border-solid ">
          <nav className="mobileNav">
            <ul>
              <li className="mb-6">
                <a className="text-xl" href="">
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a href="" className="text-xl">
                  About
                </a>
              </li>
              <li className="mb-6">
                <a href="" className="text-xl">
                  Skills
                </a>
              </li>
              <li className="mb-6">
                <a href="" className="text-xl">
                  Projects
                </a>
              </li>
              <li className="mb-6">
                <a href="" className="text-xl">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mobileMenuLink text-center lg:hidden">
        <a className="text-xl cursor-default" onClick={openMobileMenu}>
          Menu
        </a>
      </div>
    </>
  );
}

export default MobileNav;
