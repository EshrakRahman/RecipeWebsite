import headerSmallImg from "../../assets/images/image-home-hero-small.webp";
import headerLargeImg from "../../assets/images/image-home-hero-large.webp";

function Header() {
  return (
    <>
      <header className="p-3 my-10 flex flex-col justify-between items-start lg:items-center lg:justify-center">
        <div className="header-top lg:flex  lg:flex-col lg:items-center lg:justify-center">
          <h1 className="title tp-1 text-neutral-900 mb-4 lg:mb-3">
            <span className="bg-[#F9D3BB] inline-block px-2 py-0.5 rounded">
              Healthy
            </span>{" "}
            meals, zero fuss
          </h1>
          <p className="tp-6 text-neutral-800 w-[85%] md:w-full mb-8 lg:text-center">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
          <a
            href=""
            className="px-14 py-6 inline-block bg-neutral-900 text-center text-white tp-5 rounded-lg mb-11"
          >
            Start exploring
          </a>
        </div>
        <div className="header-bottom">
          {/* Mobile / default */}
          <img
            className="border-2 border-neutral-0 rounded-lg block md:hidden"
            src={headerSmallImg}
            alt="A woman chopping vegetables"
          />

          {/* Tablet and above */}
          <img
            className="border-2 border-neutral-0 rounded-lg hidden md:block"
            src={headerLargeImg}
            alt="A woman chopping vegetables"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
