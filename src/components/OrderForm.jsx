import React, { useState } from 'react';
import axios from 'axios';

function OrderForm() {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/orders', { productId, quantity });
    
    } catch (error) {
     
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} placeholder="Product ID" required />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default OrderForm;