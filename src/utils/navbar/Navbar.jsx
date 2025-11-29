import mobileLogo from "../../assets/images/logo.svg";
import hamburgerIcon from "../../assets/images/icon-hamburger-menu.svg";
import { useState } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu(e) {
    e.preventDefault();
    setShowMenu(!showMenu);
  }

  return (
    <>
      <menu className="flex justify-between items-center p-3 lg:p-6 border-b border-neutral-200 relative">
        <div className="logo w-[243px]">
          <img src={mobileLogo} alt="Healthy recipe finder logo" />
        </div>

        <nav className="nav-links md:hidden hidden lg:flex gap-4">
          <a href="/" className="tp-7 text-neutral-900">
            Home
          </a>
          <a href="/about" className="tp-7 text-neutral-900">
            About
          </a>
          <a href="/recipes" className="tp-7 text-neutral-900">
            Recipe
          </a>
        </nav>

        <div className="menu-cta md:hidden hidden px-12 py-4  bg-neutral-900 rounded-lg lg:block">
          <a href="" className=" text-center text-white tp-5  mb-11">
            Browse recipes
          </a>
        </div>

        <div className="hambuerger-menu bg-neutral-300 p-2.5 rounded-sm lg:hidden">
          <a href="" onClick={handleShowMenu}>
            <img src={hamburgerIcon} alt="Hamburger icon" />
          </a>
        </div>
      </menu>

      {showMenu && (
        <div className="show-menu flex justify-center absolute z-50 top-[6%] left-[10%] border-red-50 border-2">
          <menu className="p-4 rounded-lg justify-center bg-neutral-0 flex gap-4 flex-col w-[345px] h-[230px]">
            <ul className="flex flex-col gap-4 justify-between">
              <li>
                <a className="tp-7 text-link" href="">
                  Home
                </a>
              </li>
              <li>
                <a className="tp-7 text-link" href="">
                  About
                </a>
              </li>
              <li>
                <a className="tp-7 text-link" href="">
                  Recipes
                </a>
              </li>
            </ul>
            <a
              href=""
              className="w-full py-3 px-3 bg-neutral-900 text-center text-white tp-5 rounded-xl"
            >
              Browse Recipes
            </a>
          </menu>
        </div>
      )}
    </>
  );
}

export default NavBar;
