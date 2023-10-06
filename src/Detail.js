import React from 'react';
import "./Components/Movie.css"


function Detail({title, info}) {
    return(
        <div className="detail">
            <div style={{fontWeight:"600"}}>
            {title}
            </div>
            <br/>
            <div>
            {info}
            </div>
            
        </div>
    );
    
}
export default Detail;