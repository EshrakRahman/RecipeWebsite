import imgg from "../../assets/images/mediterranean-chickpea-salad-small.webp";
import cookTimeIcon from "../../assets/images/icon-cook-time.svg";
import prepTimeIcon from "../../assets/images/icon-prep-time.svg";
import servingIcon from "../../assets/images/icon-servings.svg";

function RecipeCard({ title, desc, img, ...props }) {
  return (
    <>
      <div className="mt-6 w-[345px] h-[554px] bg-white p-3 rounded-lg flex flex-col gap-4">
        <div className="img">
          <img className="rounded-lg" src={imgg} alt={title} />
        </div>
        <div className="info">
          <p className="tp-5 text-neutral-900">{title}</p>
          <p className="description tp-9 text-neutral-800">{desc}</p>
          <div className="cooking-info flex gap-3 wrap justify-around mt-6">
            <div className=" flex gap-4">
              <img src={servingIcon} alt="serving icon" />
              <p className="tp-9 text-neutral-900">{props.servings}</p>
            </div>
            <div className=" flex gap-4">
              <img src={prepTimeIcon} alt="prep time icon" />
              <p className="tp-9 text-neutral-900">{props.prepMinutes}</p>
            </div>
            <div className="flex gap-4">
              <img src={cookTimeIcon} alt="cook time icon" />
              <p className="tp-9 text-neutral-900 ">{props.cookMinutes}</p>
            </div>
          </div>
        </div>
        <div className="menu-cta px-8 py-3 mb-6  bg-neutral-900 rounded-lg flex justify-center items-center ">
          <a href="" className=" text-center text-white tp-5 ">
            Browse recipes
          </a>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
