import PortfolioPic from "../assets/portfolio-pic.jpg";
import { HiCode } from "react-icons/hi";

function AboutSection() {
  return (
    <section>
      <div className="h-[800px] bg-[#111827] flex justify-center">
        <div className=" w-[20rem] mt-14">
          <h2 className="text-lg mt-14 text-left text-white">About</h2>
          <br />
          <p className="text-left text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            veniam quidem quaerat! Consequuntur natus atque odio aut consequatur
            neque? Cumque voluptatum architecto quaerat accusamus autem officiis
            adipisci blanditiis, soluta eum?
          </p>
          <figure>
            <img
              src={PortfolioPic}
              alt="Picture of Andrew"
              className="rounded-full mt-10 shadow-xl"
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
