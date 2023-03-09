import React, { Component } from 'react'
import './index.css';


class EvenOdd extends Component {
    state = { 
      count : 2,
      result : 'Even'
     } 


    calculateFunction = () => {
        let random = Math.floor(Math.random() * 100)
        this.setState({count: random})

        if (random % 2 === 0) {
            this.setState({result: "Even"})
        }
        else {
            this.setState({result: "Odd"})
        }
    }

    render() { 
        return (
            <div className='main'>
            <div className='container'>
                <h2>Even or Odd</h2>
                <h2>{this.state.count}</h2>
                <button onClick={this.calculateFunction}>Increase</button>
                <h1>{this.state.result}</h1>
            </div>
            </div>
        );
    }
}
 
export default EvenOdd;