import React, { useState } from "react";
import Detail from "../Detail";
import "./Movie.css";


function Movie({src, alt, v, info}) {
  const [isHovered, setIsHovered] = useState(false);

  const showInfo = () => {
    setIsHovered(true);
  }
  const hideInfo = () => {
    setIsHovered(false);
  }

    return (
      <div className="movieInfo" 
      onMouseEnter={showInfo}
      onMouseLeave={hideInfo}
      >
        <img className="movie-poster"
          src={src} 
          alt={alt}
          style={{filter: isHovered ? "brightness(30%)" : "brightness(100%)"}}
          />
          {isHovered && <Detail title={alt} info={info}/>}

        <div className="movieTitleBox">
          <div className="movieTitle">{alt}</div>
          <div className="rating">{v}</div>
        </div>
        
      </div>
      
    );
  }
  
export default Movie;