import "../css/welcome.css";
import WelcomeSvg from "../assets/welcome-svg.svg";

function WelcomeSection() {
  return (
    <section className="overflow-hidden">
      <div className="h-[600px] bg-[#111827] flex justify-center">
        <div className=" h-[15rem] w-[20rem] mt-48 bg-[#ed6a5a] rounded-xl drop-shadow-xl border-2 border-[black] text-[#111827]">
          <h1 className="text-3xl mt-14 text-center">Hey, I'm Andrew!</h1>
          <br />
          <p className="text-center text-lg">A Front End Developer.</p>
          <figure>
            <img src={WelcomeSvg} alt="" className="mt-16" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
