import Navbar from "./Navbar";

const Intro = () => {
  return (
    <section className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-bl-[90px]">
      <div id="bg-img">
        <div>
          <Navbar />
        </div>
        <div>
          <h1 className="text-white text-center text-4xl font-semibold my-8">
            A modern <br />publishing platform
          </h1>
          <p className="text-white text-center text-xl">
            Grow your audience and build your <br /> online brand
          </p>
        </div>
        <div className="flex justify-evenly my-12">
          <button className="bg-white text-red-600 font-semibold text-xl rounded-[35px] px-4 py-3 cursor-pointer mb-40">
            Start for free
          </button>
          <button className="text-white font-semibold text-xl border rounded-[35px] px-4 py-3 cursor-pointer mb-40">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;

// className="bg-[url('./images/bg-pattern-intro-mobile.svg')] "
