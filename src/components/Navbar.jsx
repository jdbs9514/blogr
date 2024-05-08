import hamburguer from "../images/icon-hamburger.svg";
import arrowup from "../images/icon-arrow-dark.svg";

const Navbar = () => {
  return (
    <>
      <div className="bg-orange-500">
        <div className="flex justify-between mx-5 bg-orange-500">
          <h2 className="text-3xl text-white font-bold my-12">Blogr</h2>
          <img
            src={hamburguer}
            alt="hamburguer"
            className="my-14 cursor-pointer"
          />
        </div>
        <div>
          <div className="bg-white mx-5 rounded-[10px]">
            <div className="flex flex-col items-center">

              <div>
                <div className="flex gap-2 my-5">
                  <p className="text-xl">Product </p>
                  <img src={arrowup} alt="arrow" className="h-full my-2.5"/>
                </div>
                <ul>
                  <li></li> 
                </ul>
              </div>

              <div>
                <div className="flex gap-2 my-5">
                  <p className="text-xl">Company </p>
                  <img src={arrowup} alt="arrow" className="h-full my-2.5"/>
                </div>
                <ul>
                  <li></li>
                </ul>
              </div>

              <div>
                <div className="flex gap-2 my-5">
                  <p className="text-xl">Connect </p>
                  <img src={arrowup} alt="arrow" className="h-full my-2.5"/>
                </div>
                <ul>
                  <li></li>
                </ul>
              </div>

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
    </>
  );
};

export default Navbar;
