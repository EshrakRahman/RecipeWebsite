import NavBar from "./utils/navbar/Navbar";
import Header from "../src/components/header/Header";
import Features from "../src/components/Features/Features";
import TwoColumnsSection from "../src/components/Two Columns Section/TwoCloumnsSection";
import ReadyToCookSection from "../src/components/ReadyToCookSection/ReadyToCookSection";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="bg-neutral-100 ">
      <NavBar />
      <Header />
      <main className="lg:mx-25">
        <Features />
        <TwoColumnsSection />
        <ReadyToCookSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
