import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./utils/navbar/Navbar";
import Home from "../src/pages/Home";
import Footer from "./utils/Footer/Footer";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-neutral-100">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
