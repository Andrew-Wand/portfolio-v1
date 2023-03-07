import MobileNav from "./components/MobileNav";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="wrapper px-[20px] lg:px-0">
      <NavBar />
      <MobileNav />
    </div>
  );
}

export default App;
