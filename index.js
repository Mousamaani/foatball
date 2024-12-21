import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // أنشئ ملف CSS خاص بهذا المكون

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="img/JPUT-LOGO.png" alt="Logo" className="logo-image" />
      </div>
      <nav className="nav-buttons">
        <Link to="/">Home</Link>
        <Link to="/paths">Paths</Link>
        <Link to="/problem-solving">Problem Solving</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/questions">Questions</Link>
        <Link to="/information">Information</Link>
        <Link to="/the-team">The Team</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
