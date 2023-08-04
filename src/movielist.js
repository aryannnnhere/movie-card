import React, { Component } from "react"
import MovieCard from "./moviecard";

class MovieList extends Component{

   render(){
  return (
    <>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    </>


  )
    
       
  }
}

export default MovieList;