import React, {useState, useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../context/User'
 const CommentAdder = ({comments, setComments, review_id}) => {
const [textBody, setTextBody] = useState('')
const [posted, setPosted] = useState(false)
const {loggedInUser} =useContext(UserContext)



const handleSubmit = (e) =>{
e.preventDefault()
axios.post(`https://bobs-brilliant-backend-project.herokuapp.com/api/reviews/${review_id}/comments`,{votes : 0, 
review_id: review_id,
 created_at:new Date(),
  username: loggedInUser.username, 
  body : textBody, 
  comment_id : ((comments.length !== 0) ? ((comments[comments.length-1].comment_id)+1) : 1)})
.then(({data})=>{
  setComments((currComments) => {
      setPosted(true)
      return [ ...currComments, data.comment]
    })
    setTextBody('')
  })
}

if(posted){
  setTimeout(() => {
    setPosted(false)
  }, 4000);
  return  <p>comment submitted</p>

}

  return (
    <section>
<form onSubmit={(e) => handleSubmit(e)}>

<label htmlFor='comment'></label>
<br></br>
<textarea value ={textBody}id='comment' rows="10" cols="40" placeholder='This game ia amazing' required  onChange={(e) => setTextBody(e.target.value)}></textarea>
<br></br>
<button>Submit</button>
</form>

    </section>
  )
}


export default CommentAdder