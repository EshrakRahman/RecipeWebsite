import icon from "../../assets/images/icon-bullet-point.svg";
function WeExit() {
  return (
    <>
      <div className="exit-section flex flex-col lg:flex-row lg:items-start lg:gap-6 p-3 my-12 md:my-20 lg:my-24">
        <h2 className="title tp-2 text-neutral-900 mb-10 lg:w-[45%]">
          Why we exit
        </h2>
        <div className="section flex gap-4 lg:w-[55%]">
          <div className="left-side flex flex-col gap-4">
            <div className="one flex  gap-6 items-start justify-start">
              <img src={icon} alt="bullet point" />

              <div className="desc">
                <p className="tp-4 text-neutral-900 pb-3">
                  Cut through the noise
                </p>
                <p className="tp-6 text-neutral-800">
                  The internet is bursting with recipes, yet most busy cooks
                  still default to take-away or packaged foods. We curate a
                  tight collection of fool-proof dishes so you can skip the
                  scrolling and start cooking.
                </p>
              </div>
            </div>

            <div className="two flex  gap-6 items-start justify-start">
              <img src={icon} alt="bullet point" />

              <div className="desc">
                <p className="tp-4 text-neutral-900 pb-3">
                  Empower home kitchens
                </p>
                <p className="tp-6 text-neutral-800">
                  When you control what goes into your meals, you control how
                  you feel. Every recipe is built around unrefined ingredients
                  and ready in about half an hour of active prep.
                </p>
              </div>
            </div>

            <div className="three flex  gap-6 items-start justify-start">
              <img src={icon} alt="bullet point" />

              <div className="desc">
                <p className="tp-4 text-neutral-900 pb-3">
                  Make healthy look good
                </p>
                <p className="tp-6 text-neutral-800">
                  High-resolution imagery shows you exactly what success looks
                  like—because we eat with our eyes first, and confidence
                  matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeExit;
