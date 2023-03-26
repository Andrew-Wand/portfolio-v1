import { useEffect } from "react";
import ShoppingAppScreenShot from "../assets/shoppingapp-screenshot.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectsSection() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section id="projects">
      <div className=" bg-[#111827] flex justify-center">
        <div className="w-[20rem] lg:w-6/12 mt-14">
          <h2
            className="text-2xl lg:text-2xl mt-14 text-left text-white"
            data-aos="fade-up"
          >
            Projects
          </h2>

          {/* SHOPPING APP */}
          <div
            className="mt-28 lg:flex lg:justify-between lg:flex-nowrap lg:flex-row-reverse lg:my-[10rem]"
            data-aos="fade-up"
          >
            <div className="">
              <img
                className="h-[200px] rounded-xl drop-shadow-lg lg:h-full"
                src={ShoppingAppScreenShot}
                alt="Shopping App Image"
              />
            </div>

            <div className="mt-5 lg:mr-7">
              <h4 className="mb-10 text-xl text-white lg:text-3xl">
                Clothing Store App
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                quis repellat necessitatibus debitis dolorum cum impedit sed
                laudantium cumque quibusdam, dignissimos quasi ipsam dolorem
                iure velit iusto reiciendis culpa quaerat.
              </p>
              <div className="mt-5 ">
                <ul className="grid grid-cols-2 text-white">
                  <li>⬥ React</li>
                  <li>⬥ JavaScript</li>
                  <li>⬥ Firebase</li>
                  <li>⬥ TailwindCSS</li>
                </ul>
              </div>

              <div className="mt-5 flex justify-center">
                <a
                  className="btn mr-5"
                  href="https://shopping-app-react-z3nr.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project Here
                </a>
                <a
                  className="btn"
                  href="https://github.com/Andrew-Wand/shopping-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repo Here
                </a>
              </div>
            </div>
          </div>

          {/* NEXT APP */}
          <div
            className="mt-20 lg:flex lg:justify-between lg:flex-nowrap lg:my-[14rem]"
            data-aos="fade-up"
          >
            <div className="">
              <img
                className="h-[200px] rounded-xl drop-shadow-lg lg:h-full"
                src={ShoppingAppScreenShot}
                alt="Shopping App Image"
              />
            </div>
            <div className="mt-5 lg:ml-7">
              <h4 className="mb-10 text-xl text-white lg:text-3xl">
                Clothing Store App
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                quis repellat necessitatibus debitis dolorum cum impedit sed
                laudantium cumque quibusdam, dignissimos quasi ipsam dolorem
                iure velit iusto reiciendis culpa quaerat.
              </p>
              <div className="mt-5 ">
                <ul className="grid grid-cols-2 text-white">
                  <li>⬥ React</li>
                  <li>⬥ JavaScript</li>
                  <li>⬥ Firebase</li>
                  <li>⬥ TailwindCSS</li>
                </ul>
              </div>

              <div className="mt-5 flex justify-center">
                <a
                  className="btn mr-5"
                  href="https://shopping-app-react-z3nr.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project Here
                </a>
                <a
                  className="btn"
                  href="https://github.com/Andrew-Wand/shopping-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repo Here
                </a>
              </div>
            </div>
          </div>

          {/* NEXT APP */}
          <div
            className="mt-20 lg:flex lg:justify-between lg:flex-nowrap lg:flex-row-reverse lg:my-[14rem]"
            data-aos="fade-up"
          >
            <div className="">
              <img
                className="h-[200px] rounded-xl drop-shadow-lg lg:h-full"
                src={ShoppingAppScreenShot}
                alt="Shopping App Image"
              />
            </div>

            <div className="mt-5 lg:mr-7">
              <h4 className="mb-10 text-xl text-white lg:text-3xl">
                Clothing Store App
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                quis repellat necessitatibus debitis dolorum cum impedit sed
                laudantium cumque quibusdam, dignissimos quasi ipsam dolorem
                iure velit iusto reiciendis culpa quaerat.
              </p>
              <div className="mt-5 ">
                <ul className="grid grid-cols-2 text-white">
                  <li>⬥ React</li>
                  <li>⬥ JavaScript</li>
                  <li>⬥ Firebase</li>
                  <li>⬥ TailwindCSS</li>
                </ul>
              </div>

              <div className="mt-5 flex justify-center">
                <a
                  className="btn mr-5"
                  href="https://shopping-app-react-z3nr.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project Here
                </a>
                <a
                  className="btn"
                  href="https://github.com/Andrew-Wand/shopping-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repo Here
                </a>
              </div>
            </div>
          </div>

          {/* NEXT APP */}
          <div
            className="mt-20 mb-14 lg:flex lg:justify-between lg:flex-nowrap  lg:my-[14rem]"
            data-aos="fade-up"
          >
            <div className="">
              <img
                className="h-[200px] rounded-xl drop-shadow-lg lg:h-full"
                src={ShoppingAppScreenShot}
                alt="Shopping App Image"
              />
            </div>
            <div className="mt-5 lg:ml-7">
              <h4 className="mb-10 text-xl text-white lg:text-3xl">
                Clothing Store App
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                quis repellat necessitatibus debitis dolorum cum impedit sed
                laudantium cumque quibusdam, dignissimos quasi ipsam dolorem
                iure velit iusto reiciendis culpa quaerat.
              </p>
              <div className="mt-5 ">
                <ul className="grid grid-cols-2 text-white">
                  <li>⬥ React</li>
                  <li>⬥ JavaScript</li>
                  <li>⬥ Firebase</li>
                  <li>⬥ TailwindCSS</li>
                </ul>
              </div>

              <div className="mt-5 flex justify-center">
                <a
                  className="btn mr-5"
                  href="https://shopping-app-react-z3nr.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project Here
                </a>
                <a
                  className="btn"
                  href="https://github.com/Andrew-Wand/shopping-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repo Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
