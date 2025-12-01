import RecipeCard from "@/components/RecipesPageComponents/RecipeCard";
import Header from "../components/RecipesPageComponents/Header";
import RecipeFilters from "../components/RecipesPageComponents/RecipeFilters";
import RecipeList from "@/components/RecipesPageComponents/RecipeList";

function Recipes() {
  return (
    <>
      <main className="lg:mx-25">
        <Header />
        <RecipeFilters />
        <RecipeList />
      </main>
    </>
  );
}

export default Recipes;
