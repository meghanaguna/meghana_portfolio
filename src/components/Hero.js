import profile from "../assets/profile.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* <h1>
          Hi, I'm <span>Meghana</span>
        </h1>
        <h3>Frontend Developer | React.js</h3>
        <p>
          I build responsive, user-friendly web applications using modern
          JavaScript and React.
        </p> */}

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>
      </div>

      {/* <div className="hero-image">
        <img src={profile} alt="Meghana profile" />
      </div> */}
    </section>
  );
};

export default Hero;
