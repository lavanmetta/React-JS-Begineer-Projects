import React, { Component } from 'react'
import './reviews.css'
import { reviewsList } from './data'

const data = reviewsList();

class Reviews extends Component {
    state = { 
        reviews: [],
        activeIndex: 0
       
     } 

     componentDidMount() {
        const { activeIndex } = this.state;
        this.setState({ reviews: [data[activeIndex]] });
    }

    leftClick = () => {
        const { reviews } = this.state;
        const currentIndex = data.findIndex((item) => item.id === reviews[0].id);
        const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
        this.setState({ reviews: [data[newIndex]] });
      
    }

     rightClick = () => {
        const { reviews } = this.state;
      /* Finding the index of the current review and then setting the new index to the next review. */
        const currentIndex = data.findIndex((item) => item.id === reviews[0].id);
        const newIndex = currentIndex ===  data.length - 1 ? 0 : currentIndex + 1;
        this.setState({reviews: [data[newIndex]]})
        // console.log(currentIndex)
        // console.log(newIndex)
     }



    render() { 
        const {reviews} = this.state
        return (
            <div className='main-container'>
                <div className='reviews'>
                <i onClick={this.leftClick} className="ri-arrow-left-circle-fill"></i>

                {
                    reviews.map((each) => 
                    <div className='card' key={each.id}>
                        <img src={each.imgUrl} alt='img' />
                        <h3>{each.name}</h3>
                        <p>{each.review}</p>
                    </div>
                        )
                }

                   <i onClick={this.rightClick} className="ri-arrow-right-circle-fill"></i>
                </div>
            </div>
        );
    }
}
 
export default Reviews;