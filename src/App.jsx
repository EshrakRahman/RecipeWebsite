import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./utils/navbar/Navbar";
import Home from "../src/pages/Home";
import Footer from "./utils/Footer/Footer";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./components/RecipesPageComponents/RecipeDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral-100">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Recipes section */}
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
