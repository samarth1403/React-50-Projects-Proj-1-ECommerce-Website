import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Checkout from './Components/Checkout';
import Home from './Components/Home';
import Login from './Components/Login';
import MainLayout from './Components/MainLayout';
import Register from './Components/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App