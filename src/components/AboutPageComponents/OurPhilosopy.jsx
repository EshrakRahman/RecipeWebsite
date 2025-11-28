import icon from "../../assets/images/icon-bullet-point.svg";

function OurPhilosopy() {
  return (
    <>
      <div className="exit-section flex flex-col lg:flex-row lg:items-start lg:gap-6 p-3 my-12 md:my-20 lg:my-24">
        <h2 className="title tp-2 text-neutral-900 mb-10 lg:w-[45%]">
          Our food philosophy
        </h2>
        <div className="section flex gap-4 lg:w-[55%]">
          <div className="left-side flex flex-col gap-4">
            <div className="one flex  gap-6 items-start justify-start">
              <img src={icon} alt="bullet point" />

              <div className="desc">
                <p className="tp-4 text-neutral-900 pb-3">
                  Whole ingredients first.
                </p>
                <p className="tp-6 text-neutral-800">
                  Fresh produce, grains, legumes, herbs, and quality fats form
                  the backbone of every recipe.
                </p>
              </div>
            </div>

            <div className="two flex  gap-6 items-start justify-start">
              <img src={icon} alt="bullet point" />

              <div className="desc">
                <p className="tp-4 text-neutral-900 pb-3">
                  Flavor without compromise.{" "}
                </p>
                <p className="tp-6 text-neutral-800">
                  Spices, citrus, and natural sweetness replace excess salt,
                  sugar, and additives.
                </p>
              </div>
            </div>

            <div className="three flex  gap-6 items-start justify-start">
              <img src={icon} alt="bullet point" />

              <div className="desc">
                <p className="tp-4 text-neutral-900 pb-3">Respect for time. </p>
                <p className="tp-6 text-neutral-800">
                  Weeknight meals should slot into real schedules; weekend
                  cooking can be leisurely but never wasteful.
                </p>
              </div>
            </div>

            <div className="four flex  gap-6 items-start justify-start">
              <img src={icon} alt="bullet point" />

              <div className="desc">
                <p className="tp-4 text-neutral-900 pb-3">
                  Sustainable choices.
                </p>
                <p className="tp-6 text-neutral-800">
                  Short ingredient lists cut down on food waste and carbon
                  footprint, while plant-forward dishes keep things
                  planet-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurPhilosopy;
