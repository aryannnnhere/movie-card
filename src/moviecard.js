import React from "react"

const Moviecard = () =>{
    return (
       <div className="main">
        <div className="movie-card">
            <div className="left">
                <img alt="Poster" src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"/>
            </div>
            <div className="right">
                <div className="title">The Avengers</div>
                <div className="plot">Super Natural Powers</div>
                <div className="price">199</div>

                <div className="footer">
                <div className="rating">8.9</div>
                <div className="star-dis">
                <img alt="minus"
                 src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" className="str-btn" /> 

                <img alt="star"
                 src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="stars" />
                 <img alt="plus"
                 src="https://cdn-icons-png.flaticon.com/128/748/748113.png" className="str-btn" />
                </div>
                <span>0</span>


               <button className="favourite-btn">favourite</button>
               <button className="cart-btn">Add to cart</button>
                </div>
            </div>
        </div>


       </div>
    );

}

export default Moviecard;