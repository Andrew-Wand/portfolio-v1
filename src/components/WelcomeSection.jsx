import "../css/welcome.css";

function WelcomeSection() {
  return (
    <section className="overflow-hidden">
      <div className="h-[750px] bg-[#2D4059] flex justify-center">
        <div className=" h-[15rem] w-[20rem] mt-28">
          <h1 className="text-3xl mt-14 text-left">Hey, I'm Andrew!</h1>
          <br />
          <p className="text-left text-lg">A Front End Developer.</p>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
