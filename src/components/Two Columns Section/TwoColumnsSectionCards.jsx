import sectionImage from "../../assets/images/image-home-real-life-small.webp";
import sectionImageLarge from "../../assets/images/image-home-real-life-large.webp";

function TwoColumnsSectionCards() {
  return (
    <>
      <div className="flex flex-col p-3 gap-5 mt-16 lg:flex-row lg:items-center lg:gap-5 lg:my-24">
        <div className="texta-area ">
          <h2 className="tp-2 text-neutral-900 mb-5">Built for real life</h2>
          <p className=" lg:w-[80%]">
            Cooking shouldn’t be complicated. These recipes come in under{" "}
            <span className="tp-5 text-neutral-800 whitespace-pre-wrap md:bg-[#F9D3BB] md:inline-block md:px-2 md:py-0.5 md:rounded">
              30 minutes
            </span>{" "}
            of active time, fit busy schedules, and taste good enough to repeat.{" "}
          </p>
          <p className="mt-2.5 lg:w-[80%]">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </p>
        </div>
        <div className="image-section mt-5">
          <img
            className="rounded-lg block md:hidden"
            src={sectionImage}
            alt="Home real life small"
          />

          <img
            className="rounded-lg hidden md:block "
            src={sectionImageLarge}
            alt="Home real life small"
          />
        </div>
      </div>
    </>
  );
}

export default TwoColumnsSectionCards;
