// MyRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import About from '../Pages/About';
import A from '../components/A';



const MyRouter = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path='/about/a' element= {<A/>}/>
          </Route>
        </Routes>
      </>
    </Router>
    
  );
}

export default MyRouter;
