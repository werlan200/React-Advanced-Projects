import React from "react";

const Photo = ({
  alt_description,
  likes,
  urls: { regular },
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <div className="photo">
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>{likes}</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt="" className="user-img" />
        </a>
      </div>
    </div>
  );
};

export default Photo;
