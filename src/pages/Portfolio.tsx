import React from "react";
import "../portfolio.css";

const Portfolio: React.FC = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">My Portofolio</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="section" id="home">
        <div className="section__container">
          <div className="content">
            <p className="subtitle">HELLO</p>
            <h1 className="title">
              I'm{" "}
              <span>
                Muhammad Rizki
                <br />a
              </span>{" "}
              Web Developer
            </h1>
            <p className="description">
              Welcome to my web developer portfolio! I'm Muhammad Rizki, a
              skilled and creative web developer with a passion for creating
              beautiful, responsive, and user-friendly websites.
            </p>
            <div className="action__btns">
              <button className="hire__me">Hire Me</button>
              <button className="portfolio">Portfolio</button>
            </div>
          </div>
          <div className="image">
            <img
              src="https://i.pinimg.com/474x/7e/05/8d/7e058d01d8ee1303f1eeb7d92a7b3c0c.jpg"
              alt="profile"
            />
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          Hi, I am Muhammad Rizki, a fullstack Web-development. I have
          experience in using technologies such as HTML, CSS, JavaScript, and
          frameworks such as React and Node.js. I learned from the Fullstack
          Web-development bootcamp in Purwadhika and continue to be passionate
          about learning the latest technologies in the programming world.
        </p>
      </section>

      <section className="project" id="project">
        <h2 style={{ textAlign: "center" }}>My Project</h2>
        <div className="card">
          <img
            className="img"
            src="./picture/Login-form.png"
            alt=""
          />
          <h3 style={{ textAlign: "center" }}>Login form</h3>
          <p style={{ textAlign: "center" }}>sksksks</p>
          <a href="#">Github</a>
        </div>
        <div className="card">
          <img src="./picture/landing-page.png" alt="" />
          <h3 style={{ textAlign: "center" }}>Landing Page Bakerry shop</h3>
          <p style={{ textAlign: "center" }}>sksksksks</p>
          <a href="#">Github</a>
        </div>
        <div className="card">
          <img src="./picture/cek-khodam.png" alt="" />
          <h3 style={{ textAlign: "center" }}>Website cek khodam</h3>
          <p style={{ textAlign: "center" }}>sksksksks</p>
          <a href="#">Github</a>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter a valid email address" />
          <textarea placeholder="Enter Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy;2024 My Portfolio - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
