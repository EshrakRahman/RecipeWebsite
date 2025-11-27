import forkImg from "../../assets/images/pattern-fork.svg";
import knifeImg from "../../assets/images/pattern-knife.svg";

function ReadyToCookSection() {
  return (
    <>
      <div className="mt-15 md:mt-20 p-3 lg:p-0 ">
        <div className="px-4 md:py-16 py-16 bg-neutral-200 rounded-xl flex flex-col items-center justify-center relative md:overflow-hidden">
          <h3 className="tp-2 text-neutral-900 text-center pb-2.5">
            Ready to Cook smarter?
          </h3>
          <p className="tp-6 text-neutral-800 text-center pb-4">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <a
            href=""
            className="px-14 py-6 inline-block bg-neutral-900 text-center text-white tp-5 md:mt-10 rounded-lg"
          >
            Start exploring
          </a>
          <img
            className=" absolute md:bottom-0 md:left-0 bottom-[-29px] left-[-34px] w-[180px] hidden md:block"
            src={forkImg}
            alt="fork icon"
          />
          <img
            className=" absolute md:top-0 md:right-0 -top-5 right-[25px] w-[180px] hidden md:block"
            src={knifeImg}
            alt="Knife icon"
          />
        </div>
      </div>
    </>
  );
}

export default ReadyToCookSection;
