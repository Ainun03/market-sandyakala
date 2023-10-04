import React,{ useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
// slices
import { getProducts } from './slices/productsSlice';
// partial
import NavbarPar from './partials/Navbar';
// pages
import HomePage from './pages/homePages';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <NavbarPar/>
      <Routes>
          <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
