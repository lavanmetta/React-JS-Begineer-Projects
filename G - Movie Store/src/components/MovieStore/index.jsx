import React, { Component } from 'react'
import './index.css'
import MovieItem from '../MovieItem/index';
import { moviesList } from '../data';
import { tabListCategory } from '../data';
import Tab from '../Tab/tab';

class MovieStore extends Component {
    state = { 
        activeTab : tabListCategory()[0].tabId
     } 

     tabList = tabListCategory();

     setActiveTab = tabId => {
        this.setState({activeTab: tabId})
     }


     filteredMovies = () => {
        const movies = moviesList();
        const {activeTab} = this.state;

        const filtered = movies.filter(each => 
            each.category === activeTab
        )
        return filtered;
     }

    render() { 
        const {activeTab} = this.state
        const finalMovies = this.filteredMovies()

        return (
            
            <div className='movies-container'>
                <div>
                <h2>Movies Store</h2>
                </div>
                <div className='links'>
                {
                    this.tabList.map((each) => 
                    <Tab 
                      key={each.tabId}
                      tabDetails={each}
                      tabId={each.tabId}
                      setActiveTab={this.setActiveTab}
                      isActive={activeTab === each.tabId}
                    />
                    )
                }
                </div>

            <div className='movies'>
                {
                    finalMovies.map((each) => 
                      <MovieItem key={each.id} movieDetails={each}/>
                    )
                }
            </div>
               
            </div>
          
        );
    }
}
 
export default MovieStore;