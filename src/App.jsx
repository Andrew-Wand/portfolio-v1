import MobileNav from "./components/MobileNav";
import NavBar from "./components/NavBar";
import WelcomeSection from "./components/WelcomeSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="wrapper lg:px-0">
      <NavBar />
      <MobileNav />

      <WelcomeSection />
      <div className="angle angle2"></div>
      <AboutSection />
    </div>
  );
}

export default App;
