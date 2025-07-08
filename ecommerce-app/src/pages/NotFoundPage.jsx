import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4 text-gray-700">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
