import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './components/Dashobard/charts/ChartjsConfig';
import './components/Dashobard/css/style.scss';
import DashboardRoutes from './components/Dashobard/DashboardRoutes';
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
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard/*' element={<DashboardRoutes />} />
      </Routes>
    </>
  );
}

export default App;
