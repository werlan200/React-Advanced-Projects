import React from "react";
import moment from "moment";
const Article = ({ title, date, length, snippet }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("MMMM Do YYYY")},</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </div>
  );
};

export default Article;
