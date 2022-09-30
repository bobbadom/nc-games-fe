import axios from 'axios'
import React, {useState, useEffect}from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import CommentCard from './CommentCard'


const SingleReview = () => {
const [singleReview,setSingleReview] = useState({})
const navigate = useNavigate()
const {review_id}= useParams()

    useEffect(()=>{
       axios.get(`https://bobs-brilliant-backend-project.herokuapp.com/api/reviews/${review_id}`)
        .then(({data})=>{
            setSingleReview(data)
        })
        .catch((err)=>{
          navigate(`${err.response.data.msg}`)
        })
    },[review_id,navigate])

    const voteOnReview = (() =>{


        setSingleReview((currentReview)=>{
            return {...singleReview, votes: singleReview.votes + 1}
        })     
        const voteChange= {
          inc_vote : 1,
        }
        axios.patch(`https://bobs-brilliant-backend-project.herokuapp.com/api/reviews/${review_id}`, voteChange)
        .catch((err)=>{
          setSingleReview((currentReview)=>{
              return {...currentReview, votes: currentReview.votes - 1}
            
          })
        })
      })
        return (<div>
          <section>
<h2>  {singleReview.title} </h2>
<img src={singleReview.review_img_url} alt={singleReview.title}/>
<p><strong>{singleReview.owner}</strong></p>
<p><Link to ={`/category/${singleReview.category}`}><strong> Category</strong>
    &nbsp;:&nbsp;{singleReview.category}</Link></p>
<p>{singleReview.review_body}</p>
<button onClick={voteOnReview} >{singleReview.votes} votes</button>

    </section>

    <section>
      <h3>comments</h3>
      <CommentCard/></section>
    </div>
  )
}

export default SingleReview