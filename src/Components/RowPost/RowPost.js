import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axiosInstance from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'

function RowPost(props) {
  const [movieList, setMovieList] = useState([])
  const [tmdbMovieId, setTmdbMovieId] = useState("")
  useEffect(() => {
    axiosInstance.get(props.url).then((response)=>{
      console.log("movielist: ",response.data.results[0]);
      setMovieList(response.data.results);
    }).catch((err)=>{
      alert("Network error");
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleOnMovieClick = (id) => {
    console.log("got id:",id);
    axiosInstance.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      if(response.data.results.length!==0){
        console.log('hiiiiiiiiii')
        console.log(response.data.results[0])
        console.log(response.data.results[0].id)
        setTmdbMovieId(response.data.results[0]);
      }
      else{
        console.log("no trailer available");
      }
    })
  }
  return (
    <div className="row">
        <h4>{props.title}</h4>
        <div className="posters">
            {movieList.map((movie)=>{
              return <img onClick={()=>{handleOnMovieClick(movie.id)}} className={props.isSmall?"smallPoster":"poster"} src={imageUrl+movie.backdrop_path} alt="poster" />
            })}
        </div>
        {tmdbMovieId && <YouTube opts={opts} videoId={tmdbMovieId.key}/>}
    </div>
  )
}

export default RowPost