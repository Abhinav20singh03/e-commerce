import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Admin Dashboard</h1>
      </header>
      <div className="homepage-nav">
        <NavLink to="/add" className="nav-card" activeClassName="active-card">
          <span className="nav-icon">➕</span>
          <span className="nav-text">Add</span>
        </NavLink>
        <NavLink to="/list" className="nav-card" activeClassName="active-card">
          <span className="nav-icon">📋</span>
          <span className="nav-text">List</span>
        </NavLink>
        <NavLink to="/orders" className="nav-card" activeClassName="active-card">
          <span className="nav-icon">🛒</span>
          <span className="nav-text">Orders</span>
        </NavLink>
        <NavLink to="/settings" className="nav-card" activeClassName="active-card">
          <span className="nav-icon">⚙️</span>
          <span className="nav-text">Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
