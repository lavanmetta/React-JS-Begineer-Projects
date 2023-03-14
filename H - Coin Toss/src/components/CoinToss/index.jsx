import React, { Component } from 'react'
import './index.css';
import Loader from './loader';

class CoinToss extends Component {
    state = { 
       toss: 'Toss',
       loading: false
      
    }

  rollCoin = () => {
        this.setState({loading: true})
        const tossResult = Math.floor(Math.random() * 2)

        const intervalId = setInterval(() => {
            if (tossResult === 1) {
                this.setState({toss: 'Heads' , loading: false})
                clearInterval(intervalId)
            }
            else {
                this.setState({toss: 'Tails', loading: false})
                clearInterval(intervalId)
            }
          }, 2000);

          
    }
   


    render() { 
        
        return (
            <div className='main-container'>
             <div className='toss-container'>
              <h2>Toss Game</h2>
              <h4>Head and tales</h4>
                <div className='round' onClick={this.rollCoin}>
                {
                    !this.state.loading === true ? <h3>{this.state.toss}</h3> : <Loader/>
                }
                
                </div>
             </div>
            </div>
        );
    }
}
 
export default CoinToss;