import Navbar from "./Navbar";

const Intro = () => {
  return (
    <section className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-bl-[90px]">
      <div id="bg-img">
        <div>
          <Navbar />
        </div>
        <div>
          <h1 className="text-white text-center text-4xl font-semibold my-8 mx-[50px] lg:text-7xl lg:mt-[80px]">
            A modern publishing platform
          </h1>
          <p className="text-white text-center text-xl mx-[40px]">
            Grow your audience and build your online brand
          </p>
        </div>
        <div className="flex justify-evenly my-12 lg:mx-[650px]">
          <button className="bg-white text-red-600 font-semibold text-xl rounded-[35px] px-4 py-3 cursor-pointer mb-40 lg:hover:bg-red-400 lg:hover:text-white">
            Start for free
          </button>
          <button className="text-white font-semibold text-xl border rounded-[35px] px-4 py-3 cursor-pointer mb-40 lg:px-5 lg:hover:bg-white lg:hover:text-red-400">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
