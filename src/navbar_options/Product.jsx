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
                className="h-full my-2.5 cursor-pointer"
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
                className="h-full my-2.5 rotate-180 cursor-pointer"
                onClick={toggleFeature}
              />
            </div>
          </div>

          <ul className="bg-gray-300 w-[80%] flex flex-col items-center rounded-[10px]">
            <li className="my-2 cursor-pointer hover:scale-125">Overview</li>
            <li className="my-2 cursor-pointer hover:scale-125">Pricing</li>
            <li className="my-2 cursor-pointer hover:scale-125">MarketPlace</li>
            <li className="my-2 cursor-pointer hover:scale-125">Features</li>
            <li className="my-2 cursor-pointer hover:scale-125">Integrations</li>
          </ul>
        </>
      )}
    </>
  )
}

export default Product