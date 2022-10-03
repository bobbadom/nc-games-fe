
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllReviews from './components/AllReviews';
import Header from './components/Header';
import { Home } from './components/Home';
import NavBar from './components/Nav-bar';
import SingleReview from './components/SingleReview';
import Users from './components/Users';
import { UserContext } from './context/User';

function App() {
  const [reviews, setReviews] = useState([])

  const [loggedInUser, setLoggedInUser] = useState({
    username: 'grumpy19',
    name: 'Paul Grump',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013',
  })



  return (

    <div className="App">
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Header />
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reviews' element={<AllReviews reviews={reviews} setReviews={setReviews} />} />
          <Route path='/category/:category' element={<AllReviews setReviews={setReviews} reviews={reviews} />} />
          <Route path='/reviews/:review_id' element={<SingleReview reviews={reviews} setReviews={setReviews} />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
