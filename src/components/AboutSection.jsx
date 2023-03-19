import PortfolioPic from "../assets/portfolio-pic.jpg";

function AboutSection() {
  return (
    <div className="h-[800px] bg-[#111827] flex justify-center ">
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
  );
}

export default AboutSection;
