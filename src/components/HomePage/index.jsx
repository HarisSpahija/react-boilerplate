import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/HybrIT-Logo-White.png';
import './index.css';

export default function HomePage() {
  return (
    <div className="Main">
      <header className="Main-header">
        <img src={logo} className="Main-logo" alt="logo" />
        <p>
          Edit
          <code> src/components/HomePage/index.jsx </code>
          and save to reload.
        </p>
        <a
          className="Main-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NavLink to="/form" className="Main-link">
          Form Examples
        </NavLink>
      </header>
    </div>
  );
}
