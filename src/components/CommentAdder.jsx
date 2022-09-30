import React, {useState} from 'react'
import axios from 'axios'

 const CommentAdder = ({comments, setComments, review_id}) => {
const [username, setUsername] = useState('')
const [textBody, setTextBody] = useState('')
const [posted, setPosted] = useState(false)




const handleSubmit = (e) =>{
e.preventDefault()
axios.post(`https://bobs-brilliant-backend-project.herokuapp.com/api/reviews/${review_id}/comments`,{votes : 0, 
review_id: review_id,
 created_at:new Date(),
  username: username, 
  body : textBody, 
  comment_id : ((comments.length !== 0) ? ((comments[comments.length-1].comment_id)+1) : 1)})
.then(({data})=>{
  setComments((currComments) => {
      console.log(currComments, 'comments')
      setPosted(true)
      return [ ...currComments, data.comment]
    })
    setUsername('')
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
<label htmlFor='username' ><strong>Username</strong></label>
<br></br>
<input value={username}id='username'type="text" placeholder='JoeBloggs' required onChange={(e) => setUsername(e.target.value)}/>
<br></br>
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