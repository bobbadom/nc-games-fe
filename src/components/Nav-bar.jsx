import React, { useEffect, useState ,}from 'react'
import { Link } from 'react-router-dom'
import { useNavigate , useParams } from 'react-router-dom'
import { getReviews } from '../utils/api'


const NavBar = () => {
  const [allReviews, setAllReviews] = useState([])
  const navigate = useNavigate()
  const { slug } = useParams(); 
  const {category} = slug || 'all'
  useEffect(()=>{
      getReviews()
      .then(({reviews})=>{
          setAllReviews(reviews)
      })
  },[setAllReviews])
  
  const handleReviewChange = (event) => {
   
    if (event.target.value === 'all') {
      navigate('/reviews');
    } else {
      navigate(`/reviews/${event.target.value}`);
    }
  };
  
  const allReviewCategories= allReviews.map((review)=>{
      return review.category
  })
  const singleReviewCategories = [...new Set (allReviewCategories)]

  return (
    <section><h2><Link to={'/'}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to={'/reviews'}>Reviews</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </h2> Filter reviews By category<form name='menu'>

<select value={category}
onChange={handleReviewChange} ><option value='all'> all</option>{
singleReviewCategories.map( (category,index) => 
<option  key={index}>{category}</option> )
}</select>

</form>
    <></></section>
  )
}

export default NavBar
