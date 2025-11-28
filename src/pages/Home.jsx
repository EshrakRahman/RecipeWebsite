import NavBar from "../utils/navbar/Navbar";
import Header from "../components/header/Header";
import Features from "../components/Features/Features";
import TwoColumnsSection from "../components/Two Columns Section/TwoCloumnsSection";
import ReadyToCookSection from "../components/ReadyToCookSection/ReadyToCookSection";
import Footer from "../utils/Footer/Footer";

function Home() {
  return (
    <>
      <main className="lg:mx-25 ">
        <Header />
        <Features />
        <TwoColumnsSection page="home" />
        <ReadyToCookSection />
      </main>
    </>
  );
}

export default Home;
