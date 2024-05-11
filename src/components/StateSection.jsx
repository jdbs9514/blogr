import cell from "../images/illustration-phones.svg";

const StateSection = () => {
  return (
    <>
      <section className="pt-[50px]">
        <div id="slate" className="mt-[60%]">
          <div className="mt-[25%] z-10 -translate-y-[19rem] translate-x-[3%] absolute">
            <img src={cell} alt="cell" className="w-[93%]" />
          </div>
          <div id="circle" className="text-center">
            <div>
              <h2 className="text-4xl mx-14 text-white font-semibold pt-[250px]">
                State of the Art Infrastructure
              </h2>
            </div>
            <p className="mt-10 mx-16 text-white pb-[25%]">
              With reliability and speed in mind. Worlwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StateSection;
