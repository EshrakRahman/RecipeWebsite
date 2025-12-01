import recipes from "../../../data.json";
import RecipeCard from "./RecipeCard";

function RecipeList() {
  return (
    <>
      <div className="">
        {recipes.map((item) => (
          <RecipeCard
            key={item.id}
            title={item.title}
            desc={item.overview}
            img={item.image.small}
            servings={item.servings}
            prepMinutes={item.prepMinutes}
            cookMinutes={item.cookMinutes}
          />
        ))}

        {/* <div>
          {recipes.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default RecipeList;
