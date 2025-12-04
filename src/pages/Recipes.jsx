import RecipeCard from "@/components/RecipesPageComponents/RecipeCard";
import Header from "../components/RecipesPageComponents/Header";
import RecipeFilters from "../components/RecipesPageComponents/RecipeFilters";
import RecipeList from "@/components/RecipesPageComponents/RecipeList";
import RecipeDetails from "@/components/RecipesPageComponents/RecipeDetails";
import { useState } from "react";

function Recipes() {
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      <main className="lg:mx-25">
        <Header />
        <RecipeFilters
          prepTime={prepTime}
          setPrepTime={setPrepTime}
          cookTime={cookTime}
          setCookTime={setCookTime}
          search={search}
          setSearch={setSearch}
        />
        <RecipeList prepTime={prepTime} cookTime={cookTime} search={search} />
        <RecipeDetails />
      </main>
    </>
  );
}

export default Recipes;
