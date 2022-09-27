import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleReview = () => {
const [singleReview,setSingleReview] = useState()

const review_id = useParams()
    useEffect(()=>{
        getReviews()
        .then(({reviews})=>{
            setAllReviews(reviews)
        })
    },[setAllReviews])
  return (
    <div>SingleReview</div>
  )
}

export default SingleReview