import { useState, useEffect } from "react";
import TrendCard from "@/components/TrendingCard";

export function Trending() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?per_page=4`)
      .then((res) => res.json())
      .then((blogData) => {
        setBlogs(blogData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">Trending</h1>
      <div className="flex justify-between">
        {blogs.map((blog) => (
          <TrendCard
            key={blog.id}
            id={blog.id}
            coverImg={blog.social_image}
            title={blog.tile}
            category={blog.tags}
          />
        ))}
      </div>
    </div>
  );
}
