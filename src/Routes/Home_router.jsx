// MyRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';

const MyHomeRouter = () => {
  return (
    <Router>
      <>


        <Routes>
          <Route path='/' element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </>
    </Router>
    
  );
}

export default MyHomeRouter;
