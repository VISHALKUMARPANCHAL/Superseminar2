import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import About from './pages/aboutpage';
import Home from './pages/homepage';
import Contact from './pages/contactpage';
import Seminars from './pages/seminarspage';
import Login from './pages/login';
import Register from './pages/register';

import RefrshHandler from './RefrshHandler';
import {useNavigate } from 'react-router-dom';

import { useState } from 'react';
import Profile from './pages/profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element :<Navigate to="/"/> ;
  }

  return (
    <BrowserRouter>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/seminars' element={<Seminars />}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        

        <Route path='/login' element={<PrivateRoute element={<Login />} />} />
        <Route path='/register' element={<PrivateRoute element={<Register />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
