import React from "react";
import experience_image from "../assets/experience.jpg";

const Experience = () => {
  return (
    <section id="experience" className="section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Experience</h2>

        {/* MosChip Technologies */}
        <div className="row mb-5">
          <div className="col-6">
            <h3 className="fw-bold">Web Developer</h3>
            <h5 className="text-muted">
              MosChip Technologies <span className="mx-2">|</span> Hyderabad
            </h5>
            <p className="text-muted">Dec 2024 – Present</p>

            <ul className="mt-3">
              <li>
                Designed and developed full-stack web modules using React.js,
                JavaScript, Bootstrap, Node.js, PHP, and MySQL.
              </li>
              <li>
                Built reusable frontend components and optimized UI performance
                using Browser Developer Tools.
              </li>
              <li>
                Integrated frontend applications with backend REST APIs for
                accurate data flow and state handling.
              </li>
              <li>
                Converted Figma and design wireframes into pixel-perfect,
                responsive UI components.
              </li>
              <li>
                Developed and customized WordPress pages, plugins, and themes
                with SEO-focused enhancements.
              </li>
              <li>
                Implemented JavaScript logic, DOM manipulation, and
                algorithm-based problem-solving.
              </li>
              <li>
                Contributed to frontend structures aligned with Micro-Frontend
                (MFE) readiness.
              </li>
              <li>
                Collaborated with backend developers, designers, QA teams, and
                stakeholders to deliver complete features.
              </li>
            </ul>
          </div>
          <div className="col-6">
            <img src={experience_image} alt="experience_img" className="experience_image"/>
          </div>
        </div>

        {/* Irax Tech */}
        <div className="row">
          <div className="col-12">
            <h3 className="fw-bold">Associate Software Engineer</h3>
            <h5 className="text-muted">
              Irax Tech Private Limited <span className="mx-2">|</span> Hyderabad
            </h5>
            <p className="text-muted">Jun 2023 – Dec 2024</p>

            <div className="row mt-4">
              {/* Frontend */}
              <div className="col-lg-4 col-md-6 mb-4">
                <h5 className="fw-semibold">Frontend Development</h5>
                <ul>
                  <li>
                    Built interactive dashboards and e-commerce workflows using
                    React.js, HTML, CSS, and JavaScript.
                  </li>
                  <li>
                    Developed dynamic UI components, forms, modals, and tables
                    with efficient state updates.
                  </li>
                  <li>
                    Debugged UI issues, network requests, and performance
                    bottlenecks using Developer Tools.
                  </li>
                </ul>
              </div>

              {/* Backend */}
              <div className="col-lg-4 col-md-6 mb-4">
                <h5 className="fw-semibold">Backend Development</h5>
                <ul>
                  <li>
                    Developed REST APIs using Node.js (Express.js) and PHP
                    (CodeIgniter).
                  </li>
                  <li>
                    Implemented CRUD operations and optimized MySQL queries.
                  </li>
                  <li>
                    Ensured secure API communication, proper error handling, and
                    data validation.
                  </li>
                </ul>
              </div>

              {/* Full Stack */}
              <div className="col-lg-4 col-md-12">
                <h5 className="fw-semibold">Full-Stack Contributions</h5>
                <ul>
                  <li>
                    Integrated frontend UI with backend services to deliver
                    end-to-end features.
                  </li>
                  <li>
                    Resolved issues across frontend, backend, and database
                    layers.
                  </li>
                  <li>
                    Followed clean coding practices and organizational
                    development standards.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
