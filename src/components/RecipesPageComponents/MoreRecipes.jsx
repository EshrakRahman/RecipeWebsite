import recipes from "../../../data.json";
import RecipeCard from "./RecipeCard";
import { getImage } from "../../utils/getImage";

function MoreRecipes({ id }) {
  const otherRecipes = recipes.filter((r) => r.id !== Number(id));

  const shuffled = otherRecipes.sort(() => 0.5 - Math.random());

  const randomRecipes = shuffled.slice(0, 3);

  return (
    <div>
      <p className="tp-3 text-neutral-900">More Recipes</p>

      <div className="flex flex-col lg:flex-row  items-center justify-center gap-4">
        {randomRecipes.map((item) => (
          <RecipeCard
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.overview}
            imgLarge={getImage(item.image.large)}
            imgSmall={getImage(item.image.small)}
            servings={item.servings}
            prepMinutes={item.prepMinutes}
            cookMinutes={item.cookMinutes}
          />
        ))}
      </div>
    </div>
  );
}

export default MoreRecipes;
