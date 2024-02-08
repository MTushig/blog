import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Container } from "react-dom";
import { data } from "autoprefixer";

export function LatestBlogs() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?per_page=9`)
      .then((res) => res.json())
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function loadPage() {
    setLoad(false);
    fetch(`https://dev.to/api/articles?per_page=9&page=${currentPage + 1}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles([...articles, ...data]);
        setCurrentPage(currentPage + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">All Blog Post</h1>
      <div className="flex justify-between">
        <ul className="flex text-xs gap-5 text-[#495057] font-bold">
          <li>
            <a href="">All</a>
          </li>
          <a href="">Design</a>
          <a href="">Travel</a>
          <a href="">Fashion</a>
          <a href="">Technology</a>
          <a href="">Branding</a>
        </ul>
        <a href="" className="flex text-xs gap-5 text-[#495057] font-bold">
          View All
        </a>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {articles.map((article) => {
          return (
            <BlogCard
              key={article.id}
              coverImg={article.cover_image}
              title={article.title}
              category={article.tags}
              date={article.readable_publish_date}
            />
          );
        })}
      </div>

      {load && (
        <div className="justify-center flex mb-3">
          <button
            className=" border-[#696A754D] px-5  py-3 border-solid text-[#696A75]	border-2 w-[123px] justify-center flex items-center
         rounded-md"
            onClick={loadPage}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
