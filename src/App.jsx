import MobileNav from "./components/MobileNav";
import NavBar from "./components/NavBar";
import WelcomeSection from "./components/WelcomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="wrapper lg:px-0">
      <NavBar />
      <MobileNav />
      <WelcomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ScrollToTop
        className="flex justify-center items-center"
        top={980}
        svgPath="M4.70883,19.09992c1.65698-2.65907,3.50816-5.16969,5.59757-7.50549,1.0892-1.21765,2.23032-2.38878,3.42004-3.50846,.51723-.48678,1.04363-.96393,1.57876-1.43096,.51938-.45329,1.61506-1.04967,1.96389-1.63727l.10424-.07767c-1.16443-.36856-1.50472-.35101-1.02088,.05266,.20231,.37886,.74128,.72861,1.05036,1.03239,.64189,.63091,1.28377,1.26181,1.92566,1.89272,1.28377,1.26181,2.56754,2.52362,3.85131,3.78544,2.68425,2.63833,5.3685,5.27667,8.05274,7.915,2.29684,2.25755,5.83504-1.27536,3.53553-3.53553-3.03437-2.98246-6.06873-5.96493-9.1031-8.94739-1.51718-1.49123-3.03437-2.98246-4.55155-4.4737-1.5079-1.4821-3.03439-3.25955-5.37144-2.4656-1.71574,.58287-3.28328,2.29411-4.61023,3.48869-1.37258,1.23565-2.68565,2.53718-3.93229,3.89981C4.65977,10.36053,2.38084,13.38384,.39148,16.57633c-1.70661,2.73873,2.61734,5.25173,4.31735,2.5236h0Z M19.45458,50.73734V2.8888c0-3.21726-5-3.22259-5,0V50.73734c0,3.21726,5,3.22259,5,0h0Z"
        viewBox="0 0 35.51442 53.15228"
      />
      <Footer />
    </div>
  );
}

export default App;
