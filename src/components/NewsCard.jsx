import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaShareAlt, FaRegEye, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{news.author.name}</p>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="flex gap-2 ml-auto">
          <FaBookmark className="text-gray-600" />
          <FaShareAlt className="text-gray-600"></FaShareAlt>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="w-full  object-cover rounded-lg mb-4"
      />
      <p>
        {news.details.slice(0, 150)}
        <Link to={`/news/${news._id}`} className="text-primary">
          Read More
        </Link>
      </p>
      <hr className="my-2" />
      <div className="flex items-center justify-between text-gray-400">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-yellow-500 ${
                i < Math.round(news.rating.number) ? "" : "opacity-50"
              }`}
            ></AiFillStar>
          ))}
          <span className="ml-2 font-semibold">{news.rating.number}</span>
        </div>
        <div className="flex items-center">
          <FaRegEye className="mr-1"></FaRegEye>
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
