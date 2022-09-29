import React, { useEffect, useState} from 'react'
import { useParams,useNavigate , Link} from 'react-router-dom'
import { getReviews } from '../utils/api'
import { getCategories} from '../utils/api'


export const AllReviews = ({setReviews, reviews}) => {

const {category} = useParams()
const [categories, setCategories] = useState([])
const [newCategory, setCategory] = useState('all')
const navigate = useNavigate()
useEffect(()=>{
    getCategories()
    .then(({categories})=>{
        setCategories(categories)
    })
},[])

const handleReviewChange = (event) => {
setCategory(event.target.value)
  if (event.target.value === '') {
    navigate('/reviews');
  } else {
    navigate(`/category/${event.target.value}`);
  }
};

const allCategories= categories.map((category)=>{

    return category.slug
})

useEffect(()=>{
    getReviews(category)
    .then(({reviews})=>{
        setReviews(reviews)
    })
},[setReviews, category])

  return (
    <section> 
       Filter reviews By category<form name='menu'>

<select value={newCategory}
onChange={handleReviewChange} >
  <option value=''> all</option>
  {
allCategories.map( (newCategory,index) => 

<option value={newCategory} key={index}>{newCategory}</option> )
}</select>

</form>
   
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