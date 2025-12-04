// import imgg from "../../assets/images/mediterranean-chickpea-salad-small.webp";
import { Link } from "react-router-dom";
import cookTimeIcon from "../../assets/images/icon-cook-time.svg";
import prepTimeIcon from "../../assets/images/icon-prep-time.svg";
import servingIcon from "../../assets/images/icon-servings.svg";

function RecipeCard({ id, title, desc, imgLarge, imgSmall, ...props }) {
  return (
    <>
      <div className="mt-6 w-[345px]  md:w-[705px]  lg:w-[375px]    bg-white p-3 rounded-lg flex flex-col gap-4">
        <div className="img flex justify-center ">
          <img
            className="rounded-lg md:hidden lg:block"
            src={imgSmall}
            alt={title}
          />
          <img
            className="rounded-lg hidden md:block lg:hidden"
            src={imgLarge}
            alt={title}
          />
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
          <Link to={`/recipes/${id}`} className=" text-center text-white tp-5 ">
            Browse recipes
          </Link>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
