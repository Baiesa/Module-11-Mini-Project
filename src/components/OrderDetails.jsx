import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`/api/orders/${id}`);
        setOrder(response.data);
      } catch (error) {
       
      }
    };
    fetchOrder();
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div>
      <h2>Order #{order.id}</h2>
      <p>Product ID: {order.productId}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Status: {order.status}</p>
    </div>
  );
}

export default OrderDetails;