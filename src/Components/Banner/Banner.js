import React, { useEffect, useState } from 'react'
import './Banner.css'
import axiosInstance from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axiosInstance.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response);
      // lets randomly put a movie on banner on each refresh haha:
      // Math.floor(Math.random() * 10)-->Returns a random integer from 0 to 9
      let random_movie_index = Math.floor(Math.random() * 6)//display one of the top 5 most popular movies
      setMovie(response.data.results[random_movie_index])
    })
  
    // return () => {
    //   second
    // }
  }, [])

  const bcgImgUrl = movie ? imageUrl+movie.backdrop_path : "";
  
  return (
    <div className="banner" style={{backgroundImage:`url(${bcgImgUrl})`}}>
        <div className="content">
            <h1 className="title">{movie ? (movie.original_title || movie.name) : ""}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner