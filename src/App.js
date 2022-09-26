
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllReviews from './components/AllReviews';
import Header from './components/Header';
import { Home } from './components/Home';
import NavBar from './components/Nav-bar';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<AllReviews />} />

      </Routes>
    </div>
  );
}

export default App;
