import React from 'react'

const Projects = () => {
  return (
     <section id="projects" className="section">
      <h2 className="text-center mb-5">Projects</h2>

      <div className="project-card">
        <h5 className='text-muted'>Student Management Application</h5>
        <ul>
          Full-stack application with React frontend and Node.js backend.
          Features CRUD operations, REST APIs, and MySQL database.
        </ul>
        <a
          href="https://github.com/meghanaguna"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a>
      </div>
      <div className="project-card">
        <h5 className='text-muted'>REST API Development with Node.js & MySQL</h5>
        <ul>
            Developed secure REST APIs using Express.js.
            Implemented authentication, role-based access, and database integration.
            Ensured proper data validation and error handling.
        </ul>
        {/* <a
          href="https://github.com/meghanaguna"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a> */}
      </div>
      <div className="project-card">
        <h5 className='text-muted'>SEO-Optimized WordPress Website</h5>
        <ul>
            Customized WordPress themes and plugins.
            Improved UI structure, SEO performance, and website speed.
            Implemented schema markup and SEO best practices.
        </ul>
        {/* <a
          href="https://github.com/meghanaguna"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a> */}
      </div>
    </section>
  )
}

export default Projects