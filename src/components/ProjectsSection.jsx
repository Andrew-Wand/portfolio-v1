import { useEffect } from "react";
import ShoppingAppPic from '../assets/shopping-app-pic.webp'
import MovieNightPic from '../assets/movie-night-pic.webp'
import NetflixClonePic from '../assets/netflix-clone-pic.webp'
import HangmanGamePic from '../assets/hangman-game-pic.webp'
import AOS from "aos";
import "aos/dist/aos.css";
import { BiLinkExternal } from "react-icons/bi";

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

        {/* First app */}
          <div
            className="mt-28 lg:flex lg:justify-between lg:flex-nowrap lg:flex-row-reverse lg:my-[10rem]"
            data-aos="fade-up"
          >
            <div className="">
              <img
                className="h-[200px] w-[350px] rounded-xl drop-shadow-lg lg:h-auto lg:w-full lg:mt-5 lg:ml-10"
                src={ShoppingAppPic}
                alt="Shopping App Image"
              />
            </div>

            <div className="mt-5 lg:mr-7">
              <h3 className="mb-10 text-xl text-white lg:text-3xl">
                The Top Shop
              </h3>
              <p>
               Clothing shop website specializing in shirts and other types of tops. Create an account, log in, and add things to your wishlist. When ready, you can then go to your cart to check out.
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
                  href="https://shopping-app-react-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="open link to new tab to view The Top Shop website."
                >
                  View Project Here <span className="ml-3"><BiLinkExternal /></span>
                </a>
                <a
                  className="btn"
                  href="https://github.com/Andrew-Wand/shopping-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="open link to new tab to view repo for The Top Shop project."
                >
                  View Repo Here <span className="ml-3"><BiLinkExternal /></span>
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
                className="h-[200px] w-[350px] rounded-xl drop-shadow-lg lg:h-auto lg:w-full lg:mt-5"
                src={MovieNightPic}
                alt="Movie Night App Image"
              />
            </div>
            <div className="mt-5 lg:ml-7">
              <h3 className="mb-10 text-xl text-white lg:text-3xl">
                Movie Night
              </h3>
              <p>
                A movie rating app, created because I love watching movies, and I wanted a way to save and rate the movies I had watched. Just create an account and add your movies to the list. When you finish watching a movie, you can rate it and add the date watched.
              </p>
              <div className="mt-5 ">
                <ul className="grid grid-cols-2 text-white">
                  <li>⬥ React</li>
                  <li>⬥ JavaScript</li>
                  <li>⬥ Firebase</li>
                  <li>⬥ TailwindCSS</li>
                  <li>⬥ TypeScript</li>
                </ul>
              </div>

              <div className="mt-5 flex justify-center">
                <a
                  className="btn mr-5"
                  href="https://shopping-app-react-z3nr.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="open link to new tab to view the Movie Night website."
                >
                  View Project Here <span className="ml-3"><BiLinkExternal /></span>
                </a>
                <a
                  className="btn"
                  href="https://github.com/Andrew-Wand/shopping-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="open link to new tab to view the Movie Night repo."
                >
                  View Repo Here <span className="ml-3"><BiLinkExternal /></span>
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
                className="h-[200px] w-[350px] rounded-xl drop-shadow-lg lg:h-auto lg:w-full  lg:ml-16 lg:mt-5"
                src={HangmanGamePic}
                alt="Hangman Game Picture"
              />
            </div>

            <div className="mt-5 lg:mr-7">
              <h3 className="mb-10 text-xl text-white lg:text-3xl">
                Hangman Game
              </h3>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                quis repellat necessitatibus debitis dolorum cum impedit sed
                laudantium cumque quibusdam, dignissimos quasi ipsam dolorem
                iure velit iusto reiciendis culpa quaerat.
              </p>
              <div className="mt-5 ">
                <ul className="grid grid-cols-2 text-white">
                  <li>⬥ HTML5</li>
                  <li>⬥ JavaScript</li>
                  <li>⬥ CSS3</li>
               
                </ul>
              </div>

              <div className="mt-5 flex justify-center">
                <a
                  className="btn mr-5"
                  href="https://shopping-app-react-z3nr.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="open a new tab to view the Hangman Game website."
                >
                  View Project Here <span className="ml-3"><BiLinkExternal /></span>
                </a>
                <a
                  className="btn"
                  href="https://github.com/Andrew-Wand/shopping-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="open a new tab to view the Hangman Game repo."
                >
                  View Repo Here <span className="ml-3"><BiLinkExternal /></span>
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
                className="h-[200px] w-[350px] rounded-xl drop-shadow-lg lg:h-auto lg:w-full lg:mt-5"
                src={NetflixClonePic}
                alt="Netflix Clone Image"
              />
            </div>
            <div className="mt-5 lg:ml-7">
              <h3 className="mb-10 text-xl text-white lg:text-3xl">
                Netflix Clone
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                quis repellat necessitatibus debitis dolorum cum impedit sed
                laudantium cumque quibusdam, dignissimos quasi ipsam dolorem
                iure velit iusto reiciendis culpa quaerat.
              </p>
              <div className="mt-5 ">
                <ul className="grid grid-cols-2 text-white">
                  <li>⬥ React</li>
                  <li>⬥ HTML5</li>
                  <li>⬥ CSS3</li>
                </ul>
              </div>

              <div className="mt-5 flex justify-center">
                <a
                  className="btn mr-5"
                  href="https://shopping-app-react-z3nr.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="open a new tab to view the Netflix Clone website."
                >
                  View Project Here <span className="ml-3"><BiLinkExternal /></span>
                </a>
                <a
                  className="btn"
                  href="https://github.com/Andrew-Wand/shopping-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="open a new tab to view the Netflix Clone repo."
                >
                  View Repo Here <span className="ml-3"><BiLinkExternal /></span>
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
