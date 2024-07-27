import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import CustomerForm from './components/CustomerForm';
import ProductForm from './components/ProductForm';
import OrderForm from './components/OrderForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customer/new" element={<CustomerForm />} />
        <Route path="/product/new" element={<ProductForm />} />
        <Route path="/order/new" element={<OrderForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;