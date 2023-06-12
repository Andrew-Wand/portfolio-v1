import { useEffect } from "react";
import PortfolioPic from "../assets/portfolio-pic.jpg";
import { HiCode } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutSection() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="about">
      <div className="h-[1000px] lg:h-[800px] bg-[#111827] flex justify-center lg:mb-36">
        <div className=" w-[20rem] mt-14 lg:w-6/12 lg:grid lg:grid-cols-2">
          <h2
            className="text-2xl mt-14 text-left text-white lg:text-2xl"
            data-aos="fade-up"
          >
            About
          </h2>
          <br />
          <p className="text-left text-xl lg:mt-[3.5rem]" data-aos="fade-up">
              Hello, my name is Andrew! I started doing front end web development
              because of my desire for a career in problem solving and creating
              projects that I can feel proud of. Outside of working I
              spend all my free time creating as many new projects as I can. I
              have been working with and am fairly experienced in{" "}
              <span className="text-green-100">
                {" "}
                HTML5, CSS3, JavaScript and ReactJS.
              </span>{" "}
              <br />
              <br />
              I have recently been working on projects using{" "}
              <span className="text-green-100">TypeScript </span>
              to strengthen my experience and knowledge as a developer.
          </p>
          <figure>
            <img
              src={PortfolioPic}
              alt="Picture of Andrew"
              className="rounded-3xl mt-14 drop-shadow-xl w-10/12 ml-7 lg:w-full lg:ml-20"
              data-aos="fade-up"
            />
          </figure>
        </div>
      </div>
      <div className="divider m-0 px-6 bg-[#111827] text-[4rem] mt-10 lg:px-[30rem]">
        <HiCode />
      </div>
    </section>
  );
}

export default AboutSection;
