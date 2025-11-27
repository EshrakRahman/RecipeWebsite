import NavBar from "./utils/navbar/Navbar";
import Header from "../src/components/header/Header";
import Features from "../src/components/Features/Features";
import TwoColumnsSection from "../src/components/Two Columns Section/TwoCloumnsSection";

function App() {
  return (
    <div className="bg-neutral-100 ">
      <NavBar />
      <Header />
      <main className="lg:mx-25">
        <Features />
        <TwoColumnsSection />
      </main>
    </div>
  );
}

export default App;
