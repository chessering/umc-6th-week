import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Movie.css";


function Movie(props) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const showInfo = () => {
    setIsHovered(true);
  }
  const hideInfo = () => {
    setIsHovered(false);
  }
  const onClickMovieItem = () => {
    navigate(`/movie/${props.title}`, {
      state:props,
    })
  }

    return (
      <div className="movieInfo" 
      onClick={onClickMovieItem}
      onMouseEnter={showInfo}
      onMouseLeave={hideInfo}
      >
        <img className="movie-poster"
          
          src={props.poster_path} 
          alt="영화포스터"
          style={{filter: isHovered ? "brightness(30%)" : "brightness(100%)"}}
        />
        {isHovered && <div className="detail">
            <div style={{fontWeight:"600"}}>
            {props.title}
            </div>
            <br/>
            <div>
            {props.info}
            </div>  
        </div>
        }

        <div className="movieTitleBox">
          <div className="movieTitle">{props.title}</div>
          <div className="rating">{props.vote_average}</div>
        </div>
        
      </div>
      
    );
  }
  
export default Movie;