import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

 const ReviewsByCategory = () => {

    const [chosenCategory, setChosenCategory] = useState([])
    let {category} = useParams();
    // console.log(category)
    // category = category.charAt(0).toUpperCase() + category.slice(1)
    
useEffect(() => {
    axios
    .get(`https://bobs-brilliant-backend-project.herokuapp.com/api/reviews?category=${category}`)
    .then(({data}) => {
        setChosenCategory(data.reviews)
    })
}, [category])
  return (
   <section> <ul>
   {chosenCategory.map((review)=> {
       return <li key ='review_id'><img src={review.review_img_url} alt={review.title}/>
       <p><strong>Review title</strong>&nbsp;:&nbsp;{review.title} &nbsp;<strong> Category</strong>&nbsp;:&nbsp;{review.category}</p>
       <p><strong>Votes</strong>&nbsp;:&nbsp;{review.votes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Comments</strong>&nbsp;:&nbsp;{review.comment_count}</p></li>
   })}
   
   </ul> </section>
  )
}

export default ReviewsByCategory