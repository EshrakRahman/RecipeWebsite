import recipes from "../../../data.json";
import RecipeCard from "./RecipeCard";
import { getImage } from "../../utils/getImage";

function RecipeList({ cookTime, prepTime, search }) {
  const filtered = recipes.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search);

    const matchPrep = prepTime ? item.prepMinutes <= Number(prepTime) : true;

    const matchCook = cookTime ? item.cookMinutes <= Number(cookTime) : true;

    return matchSearch && matchPrep && matchCook;
  });

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {filtered.map((item) => (
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
  );
}

export default RecipeList;
