import { useParams, Link } from "react-router-dom";
import imgaa from "../../assets/images/banana-pancakes-small.webp";

import cookTimeIcon from "../../assets/images/icon-cook-time.svg";
import prepTimeIcon from "../../assets/images/icon-prep-time.svg";
import servingIcon from "../../assets/images/icon-servings.svg";
import recipes from "../../../data";
import List from "./List";
import MoreRecipes from "./MoreRecipes";

function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));
  console.log(recipe);
  // Safety check
  if (!id) return null;

  return (
    <div className="lg:mx-25 md:mx-15">
      <header className="p-3 ">
        <p className="tp-7 text-neutral-900 my-4">
          <span className="tp-7 text-neutral-900 opacity-60">Recipes / </span>
          {recipe.title}
        </p>
        <div className="breadcrumbs lg:flex lg:gap-5">
          <div className="img my-4">
            <img
              src={recipe.image.large}
              alt={recipe.title}
              className="rounded-lg hidden md:block w-full "
            />
            <img
              src={recipe.image.small}
              alt={recipe.title}
              className="rounded-lg md:hidden w-full "
            />
          </div>

          <div className="">
            <p className="tp-2 text-neutral-900 mt-4">{recipe.title}</p>
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
            <div className="info p-3">
              <List id={recipe.id} item="ingredients" />
              <List id={recipe.id} item="instructions" />
            </div>
          </div>
        </div>
      </header>
      <div className="more-recipes p-3">
        <MoreRecipes id={recipe.id} />
      </div>
    </div>
  );
}

export default RecipeDetails;
