import "./Hero.css";
import MyProfile from "../../assets/MyProfile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={MyProfile} alt="MyProfile" />
      <h1>
        My name is{" "}
        <span>
          Hadungwra Brahma,
          <br />
        </span>
        Full-stack Software Engineer
      </h1>
      <p>
        Passionate about building modern web applications with the MERN stack
        (MongoDB, Express, React, Node.js) and Redux. I love solving complex
        problems, creating clean code, and delivering seamless user experiences.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1nXij_lQFq2upXtga5FBHUrqffpXHrRYB/view?usp=sharing"
            className="download-link"
            target="_blank"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
