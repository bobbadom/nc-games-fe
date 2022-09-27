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

  return (
    <section>
<h2>  {singleReview.title} </h2>
<img src={singleReview.review_img_url}/>
<h3>{singleReview.owner}</h3>
<p><Link to ={`/category/${singleReview.category}`}><strong> Category</strong>
    &nbsp;:&nbsp;{singleReview.category}</Link></p>
<p>{singleReview.review_body}</p>
<p>{singleReview.votes}</p>
    </section>
  )
}

export default SingleReview