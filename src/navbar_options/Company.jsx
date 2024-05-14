import { useState, useEffect } from "react";
import arrowup from "../images/icon-arrow-dark.svg";
import arrowlight from "../images/icon-arrow-light.svg";

const Company = () => {

  const [displayFeature, setDisplayFeature] = useState(false);
  const [imageSource, setImageSource] = useState('');

  const toggleFeature = () => {
    setDisplayFeature(!displayFeature);
  };

  // cambiamos la imagen dependiendo el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 1024){
        setImageSource(arrowlight)
      } else {
        setImageSource(arrowup)
      };
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])

  return (
    <>
      {!displayFeature ? (
        <>
          <div>
            <div className="flex gap-2 my-5 lg:my-6">
              <p className="text-xl font-semibold lg:text-sm lg:text-white">Company</p>
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
              <p className="text-xl font-semibold">Company</p>
              <img
                src={arrowup}
                alt="arrow"
                className="h-full my-2.5 rotate-180 cursor-pointer"
                onClick={toggleFeature}
              />
            </div>
          </div>

          <ul className="bg-gray-300 w-[80%] flex flex-col items-center rounded-[10px]">
            <li className="my-2 cursor-pointer hover:scale-125">About</li>
            <li className="my-2 cursor-pointer hover:scale-125">Team</li>
            <li className="my-2 cursor-pointer hover:scale-125">Blog</li>
            <li className="my-2 cursor-pointer hover:scale-125">Careers</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Company;
