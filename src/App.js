import React from "react";
import MovieList from "./movielist"
import NavBar from "./navbar";
import {movies} from "./moviesdata";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      movies : movies,
      cartCount : 0
  }  
}

handleAddStars = (movie)=>{
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  if(movies[movieId].stars <5){
      movies[movieId].stars += 0.5
  }
  this.setState({
      movies
  });
}
handleDecStars = (movie)=>{
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  if(movies[movieId].stars > 0){
      movies[movieId].stars -= 0.5;
  }

  this.setState({
      movies
  })

}

handleToggleFav = (movie)=> {
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  movies[movieId].fav = !movies[movieId].fav;

  this.setState({
      movies
  })
}

handleToggleCart = (movie)=> {
  
  let {movies , cartCount} = this.state;
  const movieId = movies.indexOf(movie);
  movies[movieId].isInCart = !movies[movieId].isInCart;
  if(movies[movieId].isInCart){
    cartCount += 1;
  }else{
    cartCount -= 1;
  }
  this.setState({
      movies,
      cartCount
  })
}


  render(){
    const {movies , cartCount} = this.state;
    return (
      <>
      <NavBar cartCount={cartCount} />
      <MovieList movies={ movies}
                  addStars={this.handleAddStars}
                  decStars= {this.handleDecStars}
                  toggleFav={this.handleToggleFav}
                  toggleCart={this.handleToggleCart}/>
      </> 
    );
  }
  
}

export default App;
