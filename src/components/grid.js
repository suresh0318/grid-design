import React, { useState, useEffect } from "react";
import { blogData } from "../utils/commonData";
import moment from "moment";
import "./grid.css"

const Grid = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    <div>
      <div className="blog-wrapper">
        {blogs.length &&
          blogs.map(
            ({
              author,
              id,
              imageUrl,
              posted_on,
              description,
              title,
            }) => (
              <div className="blog" key={id}>
                <img src={imageUrl} alt="img" />
                <div className="blog-data">
                  <h4>{title}</h4>
                  <p className="publish-details">
                    {author}
                    <span> | {moment(posted_on).format("DD MMM YYYY")}</span>
                  </p>
                  <p className="blog-desc">{description}</p>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};
export default Grid;
