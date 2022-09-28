import axios from 'axios'
import React, {useState, useEffect}from 'react'
import { useParams, Link } from 'react-router-dom'


const SingleReview = () => {
const [singleReview,setSingleReview] = useState({})

const {review_id}= useParams()

    useEffect(()=>{
       axios.get(`https://bobs-brilliant-backend-project.herokuapp.com/api/reviews/${review_id}`)
        .then(({data})=>{
            setSingleReview(data)
        })
    },[review_id])

    const voteOnReview = (() =>{


        setSingleReview((currentReview)=>{
            return {...singleReview, votes: singleReview.votes + 1}
        })     
        const voteChange= {
          inc_vote : 1,
        }
        axios.patch(`https://bobs-brilliant-backend-project.herokuapp.com/api/reviews/${review_id}`, voteChange)
        .then(({data})=>{
         
        })
        .catch((err)=>{
          setSingleReview((currentReview)=>{
            if(currentReview.review_id === review_id){
              return {...currentReview, votes: currentReview.votes - 1}
            }
            return currentReview
          })
        })
      })
        
        return (
          <section>
<h2>  {singleReview.title} </h2>
<img src={singleReview.review_img_url} alt={singleReview.title}/>
<h3>{singleReview.owner}</h3>
<p><Link to ={`/category/${singleReview.category}`}><strong> Category</strong>
    &nbsp;:&nbsp;{singleReview.category}</Link></p>
<p>{singleReview.review_body}</p>
<button onClick={voteOnReview} >{singleReview.votes} votes</button>
    </section>
  )
}

export default SingleReview