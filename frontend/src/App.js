import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './screen/Dashboard';
import Login from './screen/Login';
import Register from './screen/Register';
//import Header from './components/Header';
import React from 'react';

function App() {
  return (
    <>
      <Router>  
        <div className = 'container'>
         
          <Routes>  
            <Route path='/' element={<Dashboard />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

/*<Header />*/