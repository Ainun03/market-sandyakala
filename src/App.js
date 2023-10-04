import React,{ useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
// slices
import { getProducts } from './slices/productsSlice';
// partial
import NavbarPar from './partials/Navbar';
// pages
import HomePage from './pages/homePages';
import ProductPage from './pages/productPages';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AuthPage from './pages/auth/AuthPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <BrowserRouter>
    {/* <NavbarPar/> */}
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="auth" element={<AuthPage />}>
            <Route index path="login" element={<LoginPage />}/>
            <Route path='register' element={<RegisterPage />}/>

          </Route>
          <Route path="/product" element={<ProductPage />}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
