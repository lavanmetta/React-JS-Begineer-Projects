import React, { Component } from 'react'
import './index.css'
class MovieStore extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <div className='movies-container'>
                <div>
                <h2>Movies Store</h2>
                </div>

                <div className='links'>
                   <span>Action</span>
                   <span>Sci-Fi</span>
                   <span>Adventure</span>
                   <span>Drama</span>
                </div>
                
            </div>
            </div>
        );
    }
}
 
export default MovieStore;