import React, { Component } from 'react'
import CommentItem from '../CommentItem/commentItem';
import { commentList } from './data';

class Comments extends Component {
    state = { 
       comments: [],
       name: '',
       comment: ''
     } 

    componentDidMount() {
        this.setState({comments: commentList()})
    }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
}

    handleSubmit = () => {
        const { name, comment } = this.state
        const newComment = {
            id: this.state.comments.length + 1,
            name,
            comment
        }

        this.setState({comments: [...this.state.comments, newComment]})
    }



    render() { 
        return (
            <div className='main-container'>
                <div className='comment'>
                    <h3>Write a Comment</h3>
                    <input name="name" onChange={this.onChange} type="text" placeholder='Enter your name'/>
                    <textarea name="comment" onChange={this.onChange} placeholder='comment...'/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>

                <div className='second-container'>
                {
                    this.state.comments.map((each) => 
                    <CommentItem key={each.id} commentDetails={each}/>
                    )
                }
                   
                </div>
            </div>
        );
    }
}
 
export default Comments;