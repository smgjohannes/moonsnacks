import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Pages/NavBar/NavBar';
import Home from './Components/Pages/Home/Home';
import Products from './Components/Pages/Products/Products';
import News from './Components/Pages/News/News';
import Shop from './Components/Pages/Shop/Shop';
import Blog from './Components/Pages/Blog/Blog';
import Contact from './Components/Pages/Contact/Contact';
import Footer from './Components/Pages/Footer/Footer';
import BlogDetailsPage from './pages/blog_details_page';
import AboutUsPage from './pages/about_us_page';
// import Welcome from './Components/Pages/Welcome/Welcome';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        {/* Coming soon */}
        {/* <Route path='/welcome' element={<Welcome />} /> */}
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/news' element={<News />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id/:slug' element={<BlogDetailsPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
