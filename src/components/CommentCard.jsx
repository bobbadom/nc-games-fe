import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CommentAdder from './CommentAdder'




 const CommentCard = () => {

    const [comments, setComments] = useState([])

    const {review_id}= useParams()

    useEffect(()=>{
       axios.get(`https://bobs-brilliant-backend-project.herokuapp.com/api/reviews/${review_id}/comments`)
        .then(({data})=>{
            setComments(data.comments)
        })
    },[review_id])
    if (comments.length === 0){
        return(<section>
            <h3> No comments gave been posted yet. you'd be really coool if you posted the first one</h3>
            <CommentAdder setComments={setComments} comments={comments} review_id={review_id}/>
        </section>
        )
    }else {

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
          </li>
      })}
      
              </ul>
      <CommentAdder setComments={setComments} comments={comments} review_id={review_id}/>
          </section>
        )

    }
}

export default CommentCard