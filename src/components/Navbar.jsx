import hamburguer from "../images/icon-hamburger.svg";
import arrowup from "../images/icon-arrow-dark.svg";
import close from "../images/icon-close.svg";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  // const [display, setdisplay] = useState(second)

  const toggleHamburguer = () => {
    setClick(!click);
  };

  return (
    <>
      {!click ? (
        <div className="bg-orange-500">
          <div className="flex justify-between mx-5 bg-orange-500">
            <h2 className="text-3xl text-white font-bold my-12">Blogr</h2>
            <div>
              <img
                src={hamburguer}
                alt="hamburguer"
                className="my-14 cursor-pointer"
                onClick={toggleHamburguer}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-orange-500">
          <div className="flex justify-between mx-5">
            <div>
              <h2 className="text-3xl text-white font-bold my-12">Blogr</h2>
            </div>
            <div>
              <img
                src={close}
                alt="close"
                className="cursor-pointer my-12"
                onClick={toggleHamburguer}
              />
            </div>
          </div>
          <div>
            <div className="bg-white mx-5 rounded-[10px]">
              <div className="flex flex-col items-center">
                <div>
                  <div className="flex gap-2 my-5">
                    <p className="text-xl">Product </p>
                    <img src={arrowup} alt="arrow" className="h-full my-2.5" />
                  </div>
                  <ul>
                    <li></li>
                  </ul>
                </div>

                <div>
                  <div className="flex gap-2 my-5">
                    <p className="text-xl">Company </p>
                    <img src={arrowup} alt="arrow" className="h-full my-2.5" />
                  </div>
                  <ul>
                    <li></li>
                  </ul>
                </div>

                <div>
                  <div className="flex gap-2 my-5">
                    <p className="text-xl">Connect </p>
                    <img src={arrowup} alt="arrow" className="h-full my-2.5" />
                  </div>
                </div>
                <ul className="bg-gray-300 w-[80%] flex flex-col items-center rounded-[10px]">
                  <li className="my-2">Contact</li>
                  <li className="my-2">Newsletter</li>
                  <li className="my-2">LinkedIn</li>
                </ul>

                <hr className="bg-black w-[80%] my-3" />

                <div className="my-5">
                  <p>Login</p>
                </div>

                <div className="mb-5">
                  <button
                    className="bg-gradient-to-r from-red-300 to-red-500 text-white rounded-2xl px-5 py-1"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
