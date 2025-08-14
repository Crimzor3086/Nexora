import React from 'react';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-4xl font-bold gold-gradient mb-3">404</h1>
        <p className="text-text-secondary-dark mb-6">The page you are looking for does not exist.</p>
        <a href="/">
          <Button>Go Home</Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
