import { useState, useEffect } from "react";
import arrowup from "../images/icon-arrow-dark.svg";
import arrowlight from "../images/icon-arrow-light.svg";

const Connect = () => {
  const [displayFeature, setDisplayFeature] = useState(false);
  const [imageSource, setImageSource] = useState("");


  const toggleFeature = () => {
    setDisplayFeature(!displayFeature);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setImageSource(arrowlight);
      } else {
        setImageSource(arrowup);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!displayFeature ? (
        <>
          <div>
            <div className="flex gap-2 my-5 lg:my-6">
              <p className="text-xl font-semibold lg:text-white lg:text-sm">
                Connect
              </p>
              <img
                src={imageSource}
                alt="arrow"
                className="h-full my-2.5 cursor-pointer lg:mt-2"
                onClick={toggleFeature}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="flex gap-2 my-5">
              <p className="text-xl font-semibold lg:text-white lg:text-sm lg:text-decoration-line: underline">
                Connect
              </p>
              <img
                src={imageSource}
                alt="arrow"
                className="h-full my-2.5 rotate-180 cursor-pointer lg:rotate-180 lg:mt-2"
                onClick={toggleFeature}
              />
            </div>
          </div>
          <ul className="bg-gray-300 w-[80%] flex flex-col items-center rounded-[10px] lg:absolute lg:w-[10%] lg:mt-[70px] lg:ml-[130px] lg:items-start lg:px-5">
            <li className="my-2 cursor-pointer hover:scale-125">Contact</li>
            <li className="my-2 cursor-pointer hover:scale-125">Newsletter</li>
            <li className="my-2 cursor-pointer hover:scale-125">LinkedIn</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Connect;
