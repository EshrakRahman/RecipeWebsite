import missionSmallImg from "../../assets/images/image-about-our-mission-small.webp";
import missionLargeImg from "../../assets/images/image-about-our-mission-large.webp";

function OurMission() {
  return (
    <>
      <header className="flex flex-col lg:flex-row  lg:gap-12 lg:items-center lg:justify-center pt-12 md:pt-16 lg:pt-21 md:pb-20 lg:pb-24 pb-12 px-4 ">
        <div className="lg:w-[45%]">
          <p className="tp-5 text-neutral-900 bg-orange-500 inline-block p-1 rounded-lg">
            Our mission
          </p>
          <h1 className="tp-2 text-neutral-900 my-6 wrap-normal lg:w-[95%]">
            Help more people cook nourishing meals, more often.
          </h1>
          <p className="tp-6 text-neutral-800 mb-4">
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p className="tp-6 text-neutral-800 mb-6">
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </div>
        <div className="lg:w-[55%]">
          <img
            className="rounded-lg block md:hidden"
            src={missionSmallImg}
            alt="Cutting veggitables"
          />
          <img
            className="rounded-lg hidden md:block"
            src={missionLargeImg}
            alt="Cutting veggitables"
          />
        </div>
      </header>
    </>
  );
}

export default OurMission;
