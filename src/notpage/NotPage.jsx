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
      <div className="notfound-actions">
        <a href="/" className="home-button">
          Go to Homepage
        </a>
          Curated by awwwards
      </div>
    </div>
  );
}

export default NotFound;
