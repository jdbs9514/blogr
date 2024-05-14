import hamburguer from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import { useState } from "react";
import Connect from "../navbar_options/Connect";
import Company from "../navbar_options/Company";
import Product from "../navbar_options/Product";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [click, setClick] = useState(false);


  const toggleHamburguer = () => {
    setClick(!click);
  };

  useGSAP(() => {
    gsap.to("#hamburger", { rotation: 360 }),
      gsap.to("#logo", { x: 20, yoyo: true, repeat: 1 });
  }, []);

  return (
    <>
      {!click ? (
        <div>
          <div className=" mx-5 lg:flex lg:justify-between lg:pt-5 lg:mx-[120px]">
            <div className="flex justify-between lg:flex lg:gap-[60px]">
              <h2
                id="logo"
                className="text-3xl text-white font-bold my-12 lg:my-8"
              >
                Blogr
              </h2>
              <div className="lg:hidden">
                <img
                  id="hamburger"
                  src={hamburguer}
                  alt="hamburguer"
                  className="my-14 cursor-pointer"
                  onClick={toggleHamburguer}
                />
              </div>

              {/* menu for desktop */}
              <div className="hidden lg:flex gap-5 mt-5 ">
                <Product />
                <Company />
                <Connect />
              </div>
            </div>
            <div className="hidden lg:flex lg:gap-5 md:mt-2">
              <div className="my-8">
                <p className="font-semibold lg:text-white lg:cursor-pointer">Login</p>
              </div>

              <div className="my-7">
                <button
                  className="bg-gradient-to-r from-red-300 to-red-500 text-white 
                    rounded-2xl px-5 py-1 font-semibold lg:text-red-600 lg:bg-gradient-to-r 
                    lg:from-white lg:to-white lg:text-sm lg:py-2 lg:px-7 lg:hover:bg-gradient-to-r 
                    lg:hover:from-red-400 lg:hover:to-red-400 lg:hover:text-white" 
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between mx-8">
            <div>
              <h2 id="logo" className="text-3xl text-white font-bold my-12">
                Blogr
              </h2>
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
          <div className="absolute w-[-webkit-fill-available] shadow-2xl">
            <div className="bg-white mx-8 rounded-[5px]">
              <div className="flex flex-col items-center ">
                <Product />
                <Company />
                <Connect />
                <hr className="bg-gray-600 w-[80%] my-5" />

                <div className="my-8">
                  <p className="font-semibold">Login</p>
                </div>

                <div className="mb-5">
                  <button
                    className="bg-gradient-to-r from-red-300 to-red-500 text-white rounded-2xl px-5 py-1 font-semibold"
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
