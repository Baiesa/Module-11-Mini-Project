import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../assets/not-found-image.jpg';

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <img src={notFoundImage} alt="Not Found" />
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFound;