
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllReviews from './components/AllReviews';
// import Categories from './components/Categories';
import Header from './components/Header';
import { Home } from './components/Home';
import NavBar from './components/Nav-bar';
import ReviewsByCategory from './components/ReviewsByCategory';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<AllReviews />} />
        <Route path='/reviews/:category' element={<ReviewsByCategory />} />
      </Routes>
    </div>
  );
}

export default App;
