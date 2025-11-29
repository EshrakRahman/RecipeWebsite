import Header from "../components/RecipesPageComponents/Header";
import RecipeFilters from "../components/RecipesPageComponents/RecipeFilters";

function Recipes() {
  return (
    <>
      <main className="lg:mx-25">
        <Header />
        <RecipeFilters />
      </main>
    </>
  );
}

export default Recipes;
