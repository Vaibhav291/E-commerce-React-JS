// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './features/auth/RegisterPage';
import LoginPage from './features/auth/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import Dashboard from './features/auth/Dashboard';
import Navbar from './features/auth/Navbar';

export default function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path='/Dashboard' element={< Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}
