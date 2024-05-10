import editor from "../images/illustration-editor-mobile.svg";

const DesignSection = () => {
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
    <section>
      <div className="mt-[25%]">
        <div className="text-center">
          <h2 className="font-semibold text-xl text-purple-950">Designed for the future</h2>
        </div>
        <div className="mt-12">
          <img src={editor} alt="editor" />
        </div>
        {text.map((item, index) => (
          <div key={index}>
            <div className="text-center mt-10">
              <h2 className="font-semibold text-purple-950 text-2xl mx-14">{item.title}</h2>
            </div>
            <div className="mt-4 text-center">
              <p className="px-9 text-zinc-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignSection;
