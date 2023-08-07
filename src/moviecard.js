import React, { Component } from "react"

class MovieCard extends Component{
    // const {title, plot, price, rating,stars,fav,addedincart} = this.props.movies;
  
//     handleCart=()=>{
//         this.setState({
//          addedincart: !this.state.addedincart
//         })
//     }
//     handleFav=()=>{
//         this.setState({
//             fav: !this.state.fav
//         })
//     }
//     minusStars(){
//         if(this.state.stars <=0){
//                 return;
//         }
//         this.setState({
//             stars: this.state.stars - 0.5
//         });
// }

//     addStars(){
//         // form 1
//         if(this.state.stars >=5){
//             return;
//         }
//         this.setState({
//             stars: this.state.stars + 0.5
//         });
        // form 2
        // this.setState((prevState)=>{
        //     return {
        //        stars: prevState.stars + 0.5
        //     }
        // });  
    

    render(){
    const {movies, onIncStars, onClickFav, onClickAddtocart, onDecStars} =  this.props
    const {title, plot, price, rating,stars,fav,isInCart,poster} = this.props.movies;
    console.log();

    return (
       <div className="main">
        <div className="movie-card">
            <div className="left">
            <img alt="Poster" src={poster}/>
            </div>
            <div className="right">
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs.{price}</div>
                <div className="footer">
                <div className="rating">{rating}</div>
                <div className="star-dis">

                <img alt="minus"
                 src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  className="str-btn" 
                  onClick={() => onDecStars(movies)} /> 

                <img alt="star"
                 src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="stars" />

                 <img alt="plus"src="https://cdn-icons-png.flaticon.com/128/748/748113.png" className="str-btn"
                   onClick={() => onIncStars(movies)} />

                 <span>{stars}</span>
                </div>
                
                <button className={fav?"unfavourite-btn":"favourite-btn"}  
                onClick={() => onClickFav(movies)}> 
                 {fav ? "Un-favourite":"Favourite"}</button>
        
                 <button className={isInCart?"unfavourite-btn":"cart-btn"}  
                onClick={() => onClickAddtocart(movies)}>
                {isInCart? "Remove from Cart":"Add to Cart"}</button>
                </div>
            </div>
        </div>
       </div>
    );
   }
  }
export default MovieCard;