import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Dashboard</h1>
              <p className="mb-4 text-center">
                Welcome to your dashboard! You are logged in.
              </p>
              <div className="d-flex justify-content-center">
                <button
                  onClick={handleLogout}
                  className="btn btn-danger"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
