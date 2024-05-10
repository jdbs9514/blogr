import hamburguer from "../images/icon-hamburger.svg";
import arrowup from "../images/icon-arrow-dark.svg";
import close from "../images/icon-close.svg";
import { useState } from "react";
import Connect from "../navbar_options/Connect";
import Company from "../navbar_options/Company";
import Product from "../navbar_options/Product";


const Navbar = () => {


  const [click, setClick] = useState(false);
  

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
            <div className="bg-white mx-5 rounded-[5px]">
              <div className="flex flex-col items-center">
                <Product />
                <Company />
                <Connect /> 
                <hr className="bg-gray-600 w-[80%] my-5" />

                <div className="my-5">
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
