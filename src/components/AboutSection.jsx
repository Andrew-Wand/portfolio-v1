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
    <section>
      <div className="h-[800px] bg-[#111827] flex justify-center">
        <div className=" w-[20rem] mt-14 lg:w-6/12 lg:grid lg:grid-cols-2">
          <h2
            className="text-lg mt-14 text-left text-white lg:text-2xl"
            data-aos="fade-up"
          >
            About
          </h2>
          <br />
          <p className="text-left text-xl lg:mt-20" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            veniam quidem quaerat! Consequuntur natus atque odio aut consequatur
            neque? Cumque voluptatum architecto quaerat accusamus autem officiis
            adipisci blanditiis, soluta eum?
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
      <div className="divider m-0 px-6 bg-[#111827] text-[4rem] mt-10">
        <HiCode />
      </div>
    </section>
  );
}

export default AboutSection;
