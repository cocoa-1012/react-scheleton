import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './components/Dashobard/charts/ChartjsConfig';
import './components/Dashobard/css/style.scss';
// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login/Login';
import './table-classes.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
