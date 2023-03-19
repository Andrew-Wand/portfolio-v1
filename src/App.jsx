import MobileNav from "./components/MobileNav";
import NavBar from "./components/NavBar";
import WelcomeSection from "./components/WelcomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper lg:px-0">
      <NavBar />
      <MobileNav />

      <WelcomeSection />
      {/* <div className="angle angle2 drop-shadow-md">
        <div className="absolute z-10 left-[40%]">Scroll Down</div>
      </div> */}

      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      {/* <ContactSection /> */}

      <Footer />
    </div>
  );
}

export default App;
