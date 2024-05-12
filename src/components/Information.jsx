import laptop from "../images/illustration-laptop-mobile.svg";


const Information = () => {

  const text = [
    {
      title: "Free, open, simple",
      description:
        "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code \
        sintax highlighting. RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. \
        The architecture is clean and is relatively easy to learn.",
    },

    {
      title: "Powerful tooling",
      description:
        "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of \
        producing even the most complicated sites.",
    },
  ];

  return (
    <section>
      <div className="mt-[25%]">
        <div className="mt-12">
          <img src={laptop} alt="editor" />
        </div>
        {text.map((item, index) => (
          <div key={index}>
            <div className="text-center mt-10">
              <h2 className="font-semibold text-purple-950 text-2xl mx-14">{item.title}</h2>
            </div>
            <div className="mt-4 text-center">
              <p className="px-9 text-zinc-500 mx-[33px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Information