import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Pages/NavBar/NavBar';
import Home from './Components/Pages/Home/Home';
import Products from './Components/Pages/Products/Products';
import About from './Components/Pages/About/About';
import News from './Components/Pages/News/News';
import Shop from './Components/Pages/Shop/Shop';
import Blog from './Components/Pages/Blog/Blog';
import Contact from './Components/Pages/Contact/Contact';
import Footer from './Components/Pages/Footer/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Coming soon */}
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
