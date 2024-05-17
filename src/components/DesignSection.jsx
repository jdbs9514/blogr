import editor from "../images/illustration-editor-mobile.svg";
import editorDesktop from "../images/illustration-editor-desktop.svg";
import { useState, useEffect } from "react";

const DesignSection = () => {
  const [imageSource, setImageSource] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setImageSource(editorDesktop);
      } else {
        setImageSource(editor);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const text = [
    {
      title: "Introducing an extensible editor",
      description:
        "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. \
      The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, \
      videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or \
      change the looks of a blog.",
    },

    {
      title: "Robust content management",
      description:
        "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized \
      categories, sections, format, or flow. With this functionality, you’re in full control.",
    },
  ];

  return (
    <section className="w-full">
      <div className="text-center">
        <h2 className="font-semibold text-2xl text-purple-950 lg:text-3xl mt-[25%] lg:mt-[10%]">
          Designed for the future
        </h2>
      </div>
      <div className="lg:mt-[5%] lg:flex lg:flex-row-reverse">
        <div className="mt-12 flex justify-center lg:mt-[-12rem] lg:scale-[1]">
          <img src={imageSource} alt="editor" className="ml-[500]" />
        </div>
        <div className="lg:w-[42%]">
          {text.map((item, index) => (
            <div key={index}>
              <div className="text-center mt-10 lg:text-start">
                <h2 className="font-semibold text-purple-950 text-2xl mx-14 lg:text-3xl">
                  {item.title}
                </h2>
              </div>
              <div className="mt-4 text-center lg:text-start lg:mt-6">
                <p className="px-9 text-zinc-500 lg:pl-[55px] lg:text-xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
