import React, { useEffect, useState} from 'react'
import { useParams,useNavigate , Link} from 'react-router-dom'
import { getReviews } from '../utils/api'
import { getCategories} from '../utils/api'


export const AllReviews = ({setReviews, reviews}) => {

const {category} = useParams()
const [categories, setCategories] = useState([])
const [newCategory, setNewCategory] = useState('all')
const [sortBy, setSortBy]= useState('created_at')
const [orderBy, setOrderBy] = useState('DESC')

const navigate = useNavigate()


useEffect(()=>{
  getCategories()
  .then(({categories})=>{
    setCategories(categories)
  })
 
},[])

const handleReviewChange = (e) => {
  setNewCategory(e.target.value)
  if (e.target.value === '') {
    navigate('/reviews');
  } else {
    navigate(`/category/${e.target.value}`);
  }
};

const sortReviewsChange = (e) =>{
  setSortBy(e.target.value)
}

const orderReviewsBy =(e)=>{
  setOrderBy(e.target.value)
}

const allCategories= categories.map((category)=>{
  
  return category.slug
})



useEffect(()=>{
  getReviews(category,sortBy, orderBy)
  .then(({reviews})=>{
      setReviews(reviews)
  })
  .catch((err)=>{
    console.log(err)
    navigate('*')
  })
},[setReviews, category,sortBy, orderBy,navigate])

return (
  <section> 
       Filter reviews By category
       <form name='menu'>
        <select value={newCategory}
onChange={handleReviewChange} >
  <option value=''> all</option>
  {
allCategories.map( (newCategory,index) => 

<option value={newCategory} key={index}>{newCategory}</option> )
}</select>
</form>

<label htmlFor='sort-by'>Sort by</label>

<form >
<select id='sort-by'
onChange={sortReviewsChange}>
<option value= {'created_at'}>Date</option>
<option value={'votes'}>Votes</option>
<option value={'comment_count'}>comments</option>

</select>

</form>
<label htmlFor='order-by'> order</label>
<form >
<select id='order-by'
onChange={orderReviewsBy}>
<option value= {'DESC'}>Descending</option>
<option value={'ASC'}>Ascending</option>
</select>

</form>
<ul>
{reviews.map((review)=> {
    return <li key ={review.review_id}> 
    <Link to ={`/reviews/${review.review_id}`}>
      <img src={review.review_img_url} alt={review.title}/>
      </Link>
    <p> <Link to ={`/reviews/${review.review_id}`}>
      <strong>Review title</strong>&nbsp;:&nbsp;{review.title} &nbsp;
      </Link>&nbsp;&nbsp;&nbsp;
      <Link to ={`/category/${review.category}`}>
        <strong> Category</strong>&nbsp;:&nbsp;
    {review.category}</Link></p>
    <p><strong>Votes</strong>&nbsp;:&nbsp;
    {review.votes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <strong>Comments</strong>&nbsp;:&nbsp;
    {review.comment_count}</p>
    </li>
})}
</ul>

    </section>
  )
}

export default AllReviews