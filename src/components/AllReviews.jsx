import React, { useEffect, useState ,} from 'react'
import { getReviews } from '../utils/api'



export const AllReviews = () => {

const [allReviews, setAllReviews] = useState([])

useEffect(()=>{
    getReviews()
    .then(({reviews})=>{
        setAllReviews(reviews)
    })
},[])



  return (
    <section> 
<ul>
{allReviews.map((review)=> {
    return <li key ={review.review_id}><img src={review.review_img_url} alt={review.title}/>
    <p><strong>Review title</strong>&nbsp;:&nbsp;{review.title} &nbsp;<strong> Category</strong>&nbsp;:&nbsp;{review.category}</p>
    <p><strong>Votes</strong>&nbsp;:&nbsp;{review.votes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Comments</strong>&nbsp;:&nbsp;{review.comment_count}</p></li>
})}

</ul>

    </section>
  )
}

export default AllReviews