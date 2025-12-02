import recipes from "../../../data.json";
import RecipeCard from "./RecipeCard";

function MoreRecipes({ id }) {
  // filter out current recipe
  const otherRecipes = recipes.filter((r) => r.id !== Number(id));

  // shuffle the array
  const shuffled = otherRecipes.sort(() => 0.5 - Math.random());

  // pick first 3
  const randomRecipes = shuffled.slice(0, 3);

  return (
    <div>
      <p className="tp-3 text-neutral-900">More Recipes</p>

      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-4">
        {randomRecipes.map((item) => (
          <RecipeCard
            key={item.id}
            title={item.title}
            desc={item.overview}
            imgLarge={item.image.large}
            imgSmall={item.image.small}
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
