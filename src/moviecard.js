import React, { Component } from "react"

class MovieCard extends Component{
    constructor(){
        super();
        this.state= {
            title: "The Avengers",
            plot: "Super Natural Powers",
            price:  199,
            rating: 8.9,
            stars:0,
            fav: false,
            addedincart:false 
        }
    }
    handleCart=()=>{
        this.setState({
         addedincart: !this.state.addedincart
        })
    }
    handleFav=()=>{
        this.setState({
            fav: !this.state.fav
        })
    }
    minusStars(){
        if(this.state.stars <=0){
                return;
        }
        this.setState({
            stars: this.state.stars - 0.5
        });
}

    addStars(){
        // form 1
        if(this.state.stars >=5){
            return;
        }
        this.setState({
            stars: this.state.stars + 0.5
        });

        // form 2
        // this.setState((prevState)=>{
        //     return {
        //        stars: prevState.stars + 0.5
        //     }
        // });  
    }

    render(){
    const {title, plot, price, rating,stars,fav,addedincart} = this.state;
    return (
       <div className="main">
        <div className="movie-card">
            <div className="left">
                <img alt="Poster" src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"/>
            </div>
            <div className="right">
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs.{price}</div>

                <div className="footer">
                <div className="rating">{rating}</div>
                <div className="star-dis">
                <img alt="minus"
                 src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" className="str-btn" 
                 onClick={this.minusStars.bind(this)} /> 

                <img alt="star"
                 src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="stars" />

                 <img alt="plus"src="https://cdn-icons-png.flaticon.com/128/748/748113.png" className="str-btn" onClick={this.addStars.bind(this)} />

                 <span>{stars}</span>
                </div>
                
               {fav? <button onClick={this.handleFav} className="unfavourite-btn">Un-favourite 
               </button>: <button onClick={this.handleFav}className="favourite-btn">Favourite</button>}
        
               <button onClick={this.handleCart} className={addedincart ?"unfavourite-btn":"cart-btn"}>{addedincart ? "Remove From Cart": "Add to cart"}</button>
                </div>
            </div>
        </div>
       </div>
    );

   }
  }
export default MovieCard;