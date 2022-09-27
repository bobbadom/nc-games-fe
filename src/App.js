
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllReviews from './components/AllReviews';
import Header from './components/Header';
import { Home } from './components/Home';
import NavBar from './components/Nav-bar';
import SingleReview from './components/SingleReview';

function App() {
  const [reviews, setReviews] = useState([])

  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<AllReviews reviews={reviews} setReviews={setReviews} />} />
        <Route path='/category/:category' element={<AllReviews setReviews={setReviews} reviews={reviews} />} />
        <Route path='/reviews/:review_id' element={<SingleReview reviews={reviews} setReviews={setReviews} />} />
      </Routes>
    </div>
  );
}

export default App;
