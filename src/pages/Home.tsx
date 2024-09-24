import React from 'react';
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import '../index.css'; // Impor file CSS

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="profile-container">
        <img
          src="https://i.pinimg.com/474x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg"
          alt="Profile Picture"
          className="profile-pic"
        />
      </div>
      <div className="text-container">
        <h2 style={{ fontFamily: "'Sora', sans-serif", color:'white' }}>Muhammad Rizki</h2>
        <p style={{ color: 'greenyellow', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
          Jakarta, Indonesia
        </p>
        <p style={{ padding: '1px', fontSize: '15px', color: 'white' }}>Full Stack Web-development</p>
      </div>

      
      <Link to="/coming-soon">
        <button className="item-1">Github</button>
      </Link>
      <Link to="/coming-soon">
        <button className="item-1">LeetCode</button>
      </Link>
      <Link to="/portfolio">
        <button className="item-1">Portfolio</button>
      </Link>
      <Link to="/coming-soon">
        <button className="item-1">Twitter</button>
      </Link>
      <Link to="/coming-soon">
        <button className="item-1">Instagram</button>
      </Link>
    </div>
  );
};

export default Home;


