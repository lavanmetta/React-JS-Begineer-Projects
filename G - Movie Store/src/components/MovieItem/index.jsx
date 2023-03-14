import React from 'react'

const MovieItem = (props) => {
    const {movieDetails} = props;
        return (
               <img src={movieDetails.imgUrl} alt="img"/>
           
        );
    }
 
export default MovieItem;