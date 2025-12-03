import recipes from "../../../data.json";
import RecipeCard from "./RecipeCard";
import { getImage } from "../../utils/getImage";

function RecipeList() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-4">
        {recipes.map((item) => (
          <RecipeCard
            id={item.id}
            key={item.id}
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
    </>
  );
}

export default RecipeList;
