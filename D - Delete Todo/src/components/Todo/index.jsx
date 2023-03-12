import React,{Component} from 'react'
import './index.css'
import { randomCompanyData } from './data';

class Todo extends Component {
    state = { 
        data : []
     } 

    componentDidMount() {
        this.setState({data: randomCompanyData()})
    }

    deleteCompanyData = (id) => {
        const deleted = this.state.data.filter(company => company.id !== id)
        this.setState({data: deleted})
    }


    render() { 
        return (
            <div className='main'>
            <h2>Delete Functionality :</h2>
            {
                this.state.data.map((each) =>
                <div key={each.id}>
                    <div>
                    <h3>{each.name}</h3>
                    <span>{each.description}</span>
                    </div>
                    <button onClick={() => this.deleteCompanyData(each.id)}>Delete</button>
                   
                </div>
             
                )
            }
            <hr/>
            </div>
        );
    }
}
 
export default Todo;