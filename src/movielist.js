import React, { Component } from "react"
import MovieCard from "./moviecard";

class MovieList extends Component{
   render(){
    const {movies, addStars , decStars , toggleFav , toggleCart} = this.props;
    // console.log(toggleCart);
    // console.log(toggleFav);

  return (
    <>
    {movies.map((movie, index)=>
                  (<MovieCard movies = {movie}
                    key = {movie.id}
                    onIncStars = {addStars}
                    onDecStars = {decStars}
                    onClickFav = {toggleFav}
                    onClickAddtocart ={toggleCart}
                   />
    
    ))}
    </>
  )
    
       
  }
}

export default MovieList;