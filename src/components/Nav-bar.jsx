import React, { useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getCategories} from '../utils/api'


const NavBar = () => {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('all')
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


  return (
    <section><h2><Link to={'/'}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to={'/reviews'}>Reviews</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </h2> Filter reviews By category<form name='menu'>

<select value={category}
onChange={handleReviewChange} >
  <option value=''> all</option>
  {
allCategories.map( (category,index) => 

<option value={category} key={index}>{category}</option> )
}</select>

</form>
    <></></section>
  )
}

export default NavBar
