import sectionImage from "../../assets/images/image-home-real-life-small.webp";
import sectionImageLarge from "../../assets/images/image-home-real-life-large.webp";
import aboutPageLarge from "../../assets/images/image-about-beyond-the-plate-large.webp";
import aboutPageSmall from "../../assets/images/image-about-beyond-the-plate-small.webp";

function TwoColumnsSectionCards({ page }) {
  let items = [];

  switch (page) {
    case "about":
      items = [{ largeImg: aboutPageLarge }];
      break;

    case "home":
      items = [{ title: "Built for real life" }];
      break;

    default:
      items = [];
  }

  return (
    <>
      <div className="flex flex-col p-3 gap-5 mt-16 lg:flex-row lg:items-center lg:gap-5 lg:my-24">
        <div className="texta-area ">
          <h2 className="tp-2 text-neutral-900 mb-5">Built for real life</h2>
          {page === "home" && (
            <>
              <p className=" lg:w-[80%]">
                Cooking shouldn’t be complicated. These recipes come in under{" "}
                <span className="tp-5 text-neutral-800 whitespace-pre-wrap md:bg-[#F9D3BB] md:inline-block md:px-2 md:py-0.5 md:rounded">
                  30 minutes
                </span>{" "}
                of active time, fit busy schedules, and taste good enough to
                repeat.{" "}
              </p>
              <p className="mt-2.5 lg:w-[80%]">
                Whether you’re new to the kitchen or just need fresh ideas,
                we’ve got you covered.
              </p>
            </>
          )}
          {/* about sectio */}
          {page === "about" && (
            <>
              <p className="tp-6 text-neutral-800 mb-3">
                We believe food is a catalyst for community and well-being. By
                sharing approachable recipes, we hope to:
              </p>
              <ul className="list-disc flex flex-col gap-3 ml-2.5 tp-6 text-neutral-800">
                <li>Encourage family dinners and social cooking.</li>
                <li>
                  Reduce reliance on single-use packaging and delivery waste.
                </li>
                <li>
                  Spark curiosity about seasonal produce and local agriculture.
                </li>
              </ul>
            </>
          )}
        </div>
        <div className="image-section mt-5">
          {page === "home" && (
            <>
              <img
                className="rounded-lg block md:hidden"
                src={sectionImage}
                alt="Home real life "
              />
              <img
                className="rounded-lg hidden md:block "
                src={sectionImageLarge}
                alt="Home real life "
              />
            </>
          )}

          {page === "about" && (
            <>
              <img
                className="rounded-lg block md:hidden"
                src={aboutPageSmall}
                alt="Three people with fruits"
              />
              <img
                className="rounded-lg hidden md:block "
                src={aboutPageLarge}
                alt="Three people with fruits "
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default TwoColumnsSectionCards;
