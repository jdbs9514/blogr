import { useState } from "react";
import arrowup from "../images/icon-arrow-dark.svg";

const Product = () => {
  const [displayFeature, setDisplayFeature] = useState(false);

  const toggleFeature = () => {
    setDisplayFeature(!displayFeature);
  };

  return (
    <>
      {!displayFeature ? (
        <>
          <div>
            <div className="flex gap-2 my-5">
              <p className="text-xl font-semibold">Product</p>
              <img
                src={arrowup}
                alt="arrow"
                className="h-full my-2.5"
                onClick={toggleFeature}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="flex gap-2 my-5">
              <p className="text-xl font-semibold">Product</p>
              <img
                src={arrowup}
                alt="arrow"
                className="h-full my-2.5 rotate-180"
                onClick={toggleFeature}
              />
            </div>
          </div>

          <ul className="bg-gray-300 w-[80%] flex flex-col items-center rounded-[10px]">
            <li className="my-2">Contact</li>
            <li className="my-2">Newsletter</li>
            <li className="my-2">LinkedIn</li>
          </ul>
        </>
      )}
    </>
  )
}

export default Product