import { useEffect } from "react";
import "../css/welcome.css";
import WelcomeSvg from "../assets/welcome-svg.svg";
import { HiCode } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

function WelcomeSection() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // { once: true }

  return (
    <section className="overflow-hidden">
      <div
        className="h-[700px] lg:h-[900px]  flex justify-center mt-20"
        data-aos="fade-up"
      >
        <div className=" h-[15rem] w-[20rem] lg:h-[30rem] lg:w-[40rem] mt-48 bg-[#ed6a5a] rounded-xl drop-shadow-xl border-2 border-[black] text-[#111827]">
          <h1 className="text-3xl mt-14 text-center">Hi, I'm Andrew!</h1>
          <br />
          <p className="text-center text-lg">A Front End Developer.</p>
          <figure>
            <img src={WelcomeSvg} alt="" className="mt-16 lg:ml-" />
          </figure>
        </div>
      </div>
      <div className="divider m-0 px-6 bg-[#111827] text-[4rem] lg:px-[30rem]">
        <HiCode />
      </div>
    </section>
  );
}

export default WelcomeSection;
