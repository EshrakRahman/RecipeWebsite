import NavBar from "./utils/navbar/Navbar";
import Header from "../src/components/header/Header";
import Features from "../src/components/Features/Features";

function App() {
  return (
    <div className="bg-neutral-100 ">
      <NavBar />
      <Header />
      <main>
        <Features />
      </main>
    </div>
  );
}

export default App;
