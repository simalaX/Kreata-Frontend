import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="page-container not-found-page">
    <h1>404</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <Link to="/" className="btn btn-primary">
      Back to Home
    </Link>
  </div>
);

export default NotFound;
