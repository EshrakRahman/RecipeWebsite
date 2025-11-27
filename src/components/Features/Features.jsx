import FeatureCard from "./FeatureCard";
import wholeFood from "../../assets/images/icon-whole-food-recipes.svg";
import minimumFuss from "../../assets/images/icon-minimum-fuss.svg";
import serachInSeconds from "../../assets/images/icon-search-in-seconds.svg";

function Features() {
  return (
    <>
      <div className="p-3 lg:p-6 lg:flex lg:flex-col lg:items-center lg:justify-center">
        <h2 className="tp-2 text-neutral-900 mb-8">What you'll get</h2>
        <div className="cards lg:flex lg:items-center lg:gap-4 2xl:gap-8 lg:justify-center">
          <FeatureCard
            icon={wholeFood}
            title="Whole-food recipes"
            desc="Each dish uses everyday, unprocessed ingredients."
            alt="carrot icon"
          />

          <FeatureCard
            icon={minimumFuss}
            title="Minimum fuss"
            desc="All recipes are designed to make eating healthy quick and easy."
            alt="minimum fuss icon"
          />

          <FeatureCard
            icon={serachInSeconds}
            title="Search in seconds"
            desc="Filter by name or ingredient and jump straight to the recipe you need."
            alt="serach icon"
          />
        </div>
      </div>
    </>
  );
}

export default Features;
