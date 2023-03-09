import React, { Component } from 'react'
import { randomCompanyData } from './data';
import './searching.css'
class Searching extends Component {
    state = { 
        data: [],
        searchTerm: '',
     } 

    filteredCompanies = () => {
       let companies = this.state.data.filter((company) => 
       company.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
       )
       return companies
    }


    componentDidMount() {
       this.setState({data: randomCompanyData()})
      
    }

    render() { 
        const filteredCompanies = this.filteredCompanies();

        return (
            <div className='main'>
            <input type="text" 
            onChange={(e) => this.setState({searchTerm: e.target.value})}
            value={this.state.searchTerm}
            placeholder='search a company' />
        <div className='box-c'>
            {
                filteredCompanies.length > 0 ?

               filteredCompanies.map(each =>
                <div key={each.id} className="box">
                  <h2>{each.name}</h2>
                  <p>{each.description}</p>
                </div> 
                             
            ) : (

            <div>
               <h1>No Result Found</h1>
            </div>
        )

        
        }
            </div>
            </div>
        );
    }
}
 
export default Searching;