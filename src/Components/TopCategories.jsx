import React from "react";

const TopCategories = () => {
  const categories = [
    {
      name: "Web Development",
      img: "https://img.icons8.com/ios-filled/100/000000/code.png",
    },

    {
      name: "Graphic Design",
      img: "https://img.icons8.com/ios-filled/100/000000/design.png",
    },
    {
      name: "Writing & Translation",
      img: "https://img.icons8.com/ios-filled/100/000000/document.png",
    },
    {
      name: "Video & Animation",
      img: "https://img.icons8.com/ios-filled/100/000000/video.png",
    },
    {
      name: "Music & Audio",
      img: "https://img.icons8.com/ios-filled/100/000000/musical-notes.png",
    },
    {
      name: "Digital Marketing",
      img: "https://img.icons8.com/ios-filled/100/000000/code.png",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800 text">
          Explore Top Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative w-45 h-45 flex flex-col items-center justify-center rounded-full border-4 border-blue-600 bg-white shadow-xl transform hover:-translate-y-3 hover:scale-105 transition-all cursor-pointer"
              style={{ rotate: `${i % 2 === 0 ? "-3deg" : "3deg"}` }}
            >
              <img src={cat.img} alt={cat.name} className="w-16 h-16 mb-2" />
              <p className="text-gray-700 font-semibold">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
