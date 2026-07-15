import React, { useState } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';
import SwipeableLayout from '../../components/Swipeablelayout';
import AnnouncementManager from '../../components/admin/AnnouncementManager';
import DashboardOverview from '../../components/admin/DashboardOverview';
import GalleryManager from '../../components/admin/GalleryManager';
import MessagesManager from '../../components/admin/MessagesManager';
import { useAuth } from '../../context/AuthContext';
import api from '../../api/axios';

const ChangePasswordSection = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    try {
      await api.post('/auth/change-password', {
        current_password: currentPassword,
        new_password: newPassword,
      });
      setSuccess('Password changed successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="change-password-container">
      <div className="change-password-card">
        <h2>Change Password</h2>
        <p className="subtitle">Update your admin account password</p>

        <form onSubmit={handleChangePassword}>
          <div className="form-group">
            <label>Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password (min 8 characters)"
            />
          </div>

          <div className="form-group">
            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
            />
          </div>

          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">{success}</p>}

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Updating...' : 'Change Password'}
          </button>
        </form>

        <style jsx>{`
          .change-password-container {
            padding: 2rem;
          }

          .change-password-card {
            background: white;
            border-radius: 8px;
            padding: 2rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            margin: 2rem auto 0;
          }

          .change-password-card h2 {
            margin: 0 0 0.5rem 0;
            color: #333;
          }

          .subtitle {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
          }

          .form-group {
            margin-bottom: 1.2rem;
          }

          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #333;
          }

          .form-group input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
            box-sizing: border-box;
          }

          .form-group input:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
          }

          .form-error {
            color: #dc3545;
            font-size: 0.9rem;
            margin-bottom: 1rem;
            padding: 0.75rem;
            background: #f8d7da;
            border-radius: 4px;
          }

          .form-success {
            color: #155724;
            font-size: 0.9rem;
            margin-bottom: 1rem;
            padding: 0.75rem;
            background: #d4edda;
            border-radius: 4px;
          }

          .btn {
            width: 100%;
            padding: 0.75rem;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .btn-primary {
            background-color: #007bff;
            color: white;
          }

          .btn-primary:hover:not(:disabled) {
            background-color: #0056b3;
          }

          .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        `}</style>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const { logout, admin } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <SwipeableLayout>
      <div className="admin-layout">
        <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="admin-sidebar-header">
            <Logo />
            <span>Kreata Admin</span>
          </div>
          <nav className="admin-nav">
            <NavLink to="/admin/dashboard" end onClick={() => setSidebarOpen(false)}>
              Overview
            </NavLink>
            <NavLink to="/admin/dashboard/gallery" onClick={() => setSidebarOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/admin/dashboard/announcements" onClick={() => setSidebarOpen(false)}>
              Announcements
            </NavLink>
            <NavLink to="/admin/dashboard/messages" onClick={() => setSidebarOpen(false)}>
              Messages
            </NavLink>
            <NavLink to="/admin/dashboard/change-password" onClick={() => setSidebarOpen(false)}>
              Change Password
            </NavLink>
          </nav>
          <button className="btn btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </aside>

        <div className="admin-content">
          <header className="admin-topbar">
            <button className="hamburger" onClick={() => setSidebarOpen((prev) => !prev)}>
              ☰
            </button>
            <span>Welcome, {admin?.username || 'Admin'}</span>
          </header>
          <div className="admin-page-content">
            <Routes>
              <Route index element={<DashboardOverview />} />
              <Route path="gallery" element={<GalleryManager />} />
              <Route path="announcements" element={<AnnouncementManager />} />
              <Route path="messages" element={<MessagesManager />} />
              <Route path="change-password" element={<ChangePasswordSection />} />
            </Routes>
          </div>
        </div>
      </div>
    </SwipeableLayout>
  );
};

export default AdminDashboard;