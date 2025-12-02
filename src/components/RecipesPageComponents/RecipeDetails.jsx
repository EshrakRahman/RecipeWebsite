import { useParams, Link } from "react-router-dom";

import cookTimeIcon from "../../assets/images/icon-cook-time.svg";
import prepTimeIcon from "../../assets/images/icon-prep-time.svg";
import servingIcon from "../../assets/images/icon-servings.svg";
import recipes from "../../../data";
import List from "./List";
import MoreRecipes from "./MoreRecipes";

function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <p className="tp-5 text-neutral-900">Recipe not found.</p>
        <Link to="/recipes" className="text-blue-500 underline">
          Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="">
      <header className="p-3">
        <div className="breadcrumbs">
          <p className="tp-7 text-neutral-900 my-4">
            <span className="tp-7 text-neutral-900 opacity-60">Recipes / </span>
            {recipe.title}
          </p>
          <div className="img my-4">
            <img
              src={recipe.image.large}
              alt={recipe.title}
              className="rounded-lg w-full max-w-lg mx-auto"
            />
          </div>
          <p className="tp-5 text-neutral-900 mt-4">{recipe.title}</p>
          <p className="tp-6 text-neutral-800">{recipe.overview}</p>
          <div className="cooking-info flex flex-wrap gap-3 justify-around mt-6">
            <div className="flex gap-4 items-center">
              <img src={servingIcon} alt="servings" />
              <p className="tp-9 text-neutral-900">
                Servings: {recipe.servings}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={prepTimeIcon} alt="prep time" />
              <p className="tp-9 text-neutral-900">
                Prep: {recipe.prepMinutes} mins
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={cookTimeIcon} alt="cook time" />
              <p className="tp-9 text-neutral-900">
                Cook: {recipe.cookMinutes} mins
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="info p-3">
        <List id={recipe.id} item="ingredients" />
        <List id={recipe.id} item="instructions" />
      </div>

      <div className="more-recipes p-3">
        <MoreRecipes id={recipe.id} />
      </div>
    </div>
  );
}

export default RecipeDetails;
