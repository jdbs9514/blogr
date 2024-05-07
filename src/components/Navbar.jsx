import hamburguer from "../images/icon-hamburger.svg"

const Navbar = () => {
  return (
    <>
      <div className="bg-orange-500">
        <div className="flex justify-between mx-5 bg-orange-500">
           <h2 className="text-3xl text-white font-bold my-12">Blogr</h2>
           <img src={hamburguer} alt="hamburguer" className="my-14 cursor-pointer"/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
