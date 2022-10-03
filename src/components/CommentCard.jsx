import React, { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CommentAdder from './CommentAdder'
import { UserContext } from '../context/User'



 const CommentCard = () => {
    const {loggedInUser} =useContext(UserContext)

    const [comments, setComments] = useState([])
    const {review_id}= useParams()
    const [isDeleted, setIsDeleted] = useState(false)
    const[isError, setIsError] = useState(false)
    const [error , setError] = useState(null)

    useEffect(()=>{
       axios.get(`https://bobs-brilliant-backend-project.herokuapp.com/api/reviews/${review_id}/comments`)
        .then(({data})=>{
            setComments(data.comments)
        })
    },[review_id, isDeleted])

    
    const deleteComment =  (commentID)=>{
     axios.delete(`https://bobs-brilliant-backend-project.herokuapp.com/api/comments/${commentID}`)
        .then((currComments) => {
        setIsDeleted(true)
          })
          .catch((err)=>{
            setIsError(true)
            setError({err})
          })
        
            }
          
   
    







    if (comments.length === 0){
        return(<section>
            <h3> No comments gave been posted yet. you'd be really coool if you posted the first one</h3>
            <CommentAdder setComments={setComments} comments={comments} review_id={review_id}/>
        </section>
        )
    }else if(isError){
        setTimeout(() => {
            setIsError(false)
          }, 4000);
        return (
            <section>
                <ul>
        {comments.map((comment)=>{
            const convertedDate = comment.created_at
            const dateString = `${convertedDate.split('T')[1].split('.')[0].split(':')[0]}:${convertedDate.split('T')[1].split('.')[0].split(':')[1]}, ${convertedDate.split('T')[0]}`
            return <li className='comments' key={comment.comment_id}>
                <p>Created by:<strong> {comment.author}</strong> </p>
                <p>{comment.body} </p>
                <p>Date posted : {dateString}</p>
                <button value={comment.comment_id} onClick={(()=>{deleteComment(comment.comment_id)})}>Delete</button>
            </li>
           
        })}
        
                </ul>
                <p>{error}</p>
        <CommentAdder setComments={setComments} comments={comments} review_id={review_id}/>
            </section>
          )
    }
    else  if
    (isDeleted){
        setTimeout(() => {
            setIsDeleted(false)
          }, 4000);
        return (
            <section>
                <ul>
        {comments.map((comment)=>{
            const convertedDate = comment.created_at
            const dateString = `${convertedDate.split('T')[1].split('.')[0].split(':')[0]}:${convertedDate.split('T')[1].split('.')[0].split(':')[1]}, ${convertedDate.split('T')[0]}`
            return <li className='comments' key={comment.comment_id}>
                <p>Created by:<strong> {comment.author}</strong> </p>
                <p>{comment.body} </p>
                <p>Date posted : {dateString}</p>
               {} <button value={comment.comment_id} onClick={(()=>{deleteComment(comment.comment_id)})}>Delete</button>
            </li>
           
        })}
        
                </ul>
                <p>your comment has been deleted</p>
        <CommentAdder setComments={setComments} comments={comments} review_id={review_id}/>
            </section>
          )
    }
    else{

        return (
          <section>
              <ul>
      {comments.map((comment)=>{
          const convertedDate = comment.created_at
          const dateString = `${convertedDate.split('T')[1].split('.')[0].split(':')[0]}:${convertedDate.split('T')[1].split('.')[0].split(':')[1]}, ${convertedDate.split('T')[0]}`
          return <li className='comments' key={comment.comment_id}>
              <p>Created by:<strong> {comment.author}</strong> </p>
              <p>{comment.body} </p>
              <p>Date posted : {dateString}</p>
              {comment.author === loggedInUser.username ?<button value={comment.comment_id} onClick={(()=>{deleteComment(comment.comment_id)})}>Delete</button>: <p> </p>}
          </li>
      })}
      
              </ul>
      <CommentAdder setComments={setComments} comments={comments} review_id={review_id}/>
          </section>
        )
      
    }
}

export default CommentCard