import "./About.css";
import MeWithDog from "../../assets/MeWithDog.jpg";
import mySkills from "../../assets/my_skills_data";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={MeWithDog} alt="MeWithDog" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate Software Engineer and Full-Stack Developer with
              an MCA degree, specializing in building dynamic and scalable web
              applications using the MERN stack (MongoDB, Express, React,
              Node.js) and Redux. I enjoy working across the entire development
              lifecycle, from designing responsive user interfaces to developing
              robust backend services.
            </p>
            <p>
              With a strong foundation in both frontend and backend
              technologies, I take pride in creating seamless, high-performance
              applications that meet users’ needs and business goals. I thrive
              on solving complex problems, optimizing code for scalability, and
              collaborating with cross-functional teams to deliver exceptional
              products.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skills-header">
              <h2>My Skills</h2>
            </div>
            <div className="about-skill-container">
              {mySkills.map((skill, index) => (
                <div className="about-skill" key={index}>
                  <img src={skill.sicon} alt="" />
                  <p>{skill.sname}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
