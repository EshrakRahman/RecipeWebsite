import instaIcon from "../../assets/images/icon-instagram.svg";
import tiktokIcon from "../../assets/images/icon-tiktok.svg";
import blueskyIcon from "../../assets/images/icon-bluesky.svg";

function Footer() {
  return (
    <>
      <footer className="bg-white px-4 mt-5 pt-8 pb-5 flex flex-col gap-6 items-center justify-center md:flex-row md:justify-between">
        <div className="icons flex gap-5 md:order-2">
          <img src={instaIcon} alt="instagram icon" />
          <img src={blueskyIcon} alt="bluesky icon" />
          <img src={tiktokIcon} alt="tiktok icon" />
        </div>
        <div className="text">
          <p className="tp-9 text-neutral-900">Made with ❤️ and 🥑</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
