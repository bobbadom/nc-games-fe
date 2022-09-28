import React, { useEffect} from 'react'
import { useParams , Link} from 'react-router-dom'
import { getReviews } from '../utils/api'



export const AllReviews = ({setReviews, reviews}) => {

const {category} = useParams()

useEffect(()=>{
    getReviews(category)
    .then(({reviews})=>{
        setReviews(reviews)
    })
},[setReviews, category])

  return (
    <section> 
<ul>
{reviews.map((review)=> {
    return <li key ={review.review_id}> <Link to ={`/reviews/${review.review_id}`}><img src={review.review_img_url} alt={review.title}/></Link>
    <p> <Link to ={`/reviews/${review.review_id}`}><strong>Review title</strong>&nbsp;:&nbsp;{review.title} &nbsp;</Link>&nbsp;&nbsp;&nbsp;<Link to ={`/category/${review.category}`}><strong> Category</strong>
    &nbsp;:&nbsp;{review.category}</Link></p>
    <p><strong>Votes</strong>&nbsp;:&nbsp;{review.votes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Comments</strong>&nbsp;:&nbsp;{review.comment_count}</p></li>
})}

</ul>

    </section>
  )
}

export default AllReviews