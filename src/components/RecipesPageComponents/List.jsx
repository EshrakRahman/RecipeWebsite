import icon from "../../assets/images/icon-bullet-point.svg";
import recipes from "../../../data.json";

function List({ id, item }) {
  const recipe = recipes.find((r) => r.id === Number(id));
  const numericId = Number(id);
  // Safety checks
  console.log(numericId);

  if (!recipe) return <p>Recipe not found.</p>;
  if (!recipe[item]) return <p>No {item} available.</p>;
  const list = recipe[item];

  return (
    <div className="p-3 my-5">
      <p className="tp-4 pb-5 text-neutral-900">
        {item.charAt(0).toUpperCase() + item.slice(1)}:
      </p>

      <div className="flex flex-col gap-4">
        {list.map((text, index) => (
          <div key={index} className="one flex gap-6 items-start">
            <img src={icon} alt="bullet point" />
            <p className="tp-6 text-neutral-800">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
