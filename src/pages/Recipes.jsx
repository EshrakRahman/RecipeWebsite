import RecipeCard from "@/components/RecipesPageComponents/RecipeCard";
import Header from "../components/RecipesPageComponents/Header";
import RecipeFilters from "../components/RecipesPageComponents/RecipeFilters";
import RecipeList from "@/components/RecipesPageComponents/RecipeList";
import RecipeDetails from "@/components/RecipesPageComponents/RecipeDetails";

function Recipes() {
  return (
    <>
      <main className="lg:mx-25">
        <Header />
        <RecipeFilters />
        <RecipeList />
        <RecipeDetails />
      </main>
    </>
  );
}

export default Recipes;
