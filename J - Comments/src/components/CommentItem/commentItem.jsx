import React from 'react'


const CommentItem = (props) => {
    const {commentDetails} = props;
    const { name, comment} = commentDetails;
  
        return (
            <div className='comment-item'>
                <div className='Name'>
                  <h2>{name[0]}</h2>
                </div>
                <div className='comment-para'>
                    <h4>{name}</h4>
                    <p>{comment}</p>
                </div>
            </div>
        );
    }

 
export default CommentItem;