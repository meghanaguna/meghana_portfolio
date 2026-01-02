import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section contact py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact</h2>

        <div className="row justify-content-center text-center">
          
          {/* Email */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="contact-item">
              <FaEnvelope className="contact-icon mb-2" />
              <p className="mb-0">maggieguna124@gmail.com</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="contact-item">
              <FaGithub className="contact-icon mb-2" />
              <a
                href="https://github.com/meghanaguna"
                target="_blank"
                rel="noreferrer"
              >
                github.com/meghanaguna
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="contact-item">
              <FaLinkedin className="contact-icon mb-2" />
              <a
                href="https://linkedin.com/in/meghanaguna"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/meghana
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
