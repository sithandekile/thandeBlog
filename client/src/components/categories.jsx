import React from "react";
import { Link } from "react-router-dom";
import { categories, posts } from "../data";

const Categories = () => {
  return (
    <section id="categories" className="my-10 mx-4 md:mx-20 surface">
      <div className="dark:bg-gray-950 p-4 md:p-10 rounded-2xl shadow-lg">
        <div className="text-center mb-10 ">
          <h2 className=" text-3xl md:text-4xl font-bold mb-8">
            Explore Stories by Category
          </h2>
          <p className="text-gray-600 md:text-xl mx-auto">
            Find thoughtful articles, practical ideas, and inspiring stories organized around the topics that matter to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-4 ">
          {categories.map((category) => (
            <Link
              key={category.name}
              to  ={`blog/${category.name.toLowerCase()}`}
              className="group block p-6 rounded-2xl border border-orange-500 transition-all duration-300 card-glow text-center hover:border-orange-600 cursor-pointer"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-orange-700 flex items-center justify-center transition-colors group-hover:bg-orange-600">
                <category.icon className="w-7 h-7 text-white/50" />
              </div>
              <h3 className="font-medium mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">
                {posts.filter((post) => post.category === category.name).length} articles
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
