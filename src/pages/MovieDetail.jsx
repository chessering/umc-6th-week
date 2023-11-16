import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_URL } from "./Movies"

export default function MovieDetail() {

    const { title } = useParams();
    const { state } = useLocation();
    console.log(title);
    console.log(state);

    return (
        <div className="page-container">
            <div style={{display:"flex"}}>
                <img 
                style={{width: "300px", height:"450px"}}
                src={IMG_URL + state.poster_path} 
                alt="영화 포스터 이미지"/>
            </div>
            <div>
                <div style={{fontSize:"32px"}}>{title}</div>
            </div>
        </div>
    );
}