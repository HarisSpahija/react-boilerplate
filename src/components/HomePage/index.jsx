import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/HybrIT-Logo-White.png';
import './index.css';

export default function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit
          <code> src/components/HomePage/index.jsx </code>
          and save to reload.
        </p>
        <a className="link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <NavLink to="/form" className="link">
          Form Examples
        </NavLink>
      </header>
    </div>
  );
}
