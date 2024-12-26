import React from "react";
import "./NotPage.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-header">
        <h1>Oops! 404</h1>
        <p>
          The page you are looking for doesn't exist or has been moved. But hey,
          no worries, let’s get you back on track!
        </p>
      </div>
      <div className="notfound-image">
        {/* <img 
          src="https://via.placeholder.com/400" 
          alt="Lost in Space" 
          className="notfound-img"
        /> */}
      </div>
      <div className="notfound-actions">
        <a href="/" className="home-button">
          Go to Homepage
        </a>
        <a
        //   href="https://www.awwwards.com"
        //   target="_blank"
        //   rel="noopener noreferrer"
        //   className="curated-link"
        >
          Curated by awwwards
        </a>
      </div>
    </div>
  );
}

export default NotFound;
