import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className='container'>
        <h2 className="text-center mb-5">Skills</h2>
        <div className='row'>
            <div className='col-lg-6 col-sm-12'>
                <div>
                    <h5 className="text-muted">Frontend</h5>
                    <ul className="skills">
                        <li>HTML5, CSS3, JavaScript (ES6+)</li>
                        <li>React.js (Reusable Components, State Management)</li>
                        <li>Bootstrap</li>
                        <li>Responsive Web Design</li>
                        <li>DOM Manipulation & UI Optimization</li>
                        <li>Cross-Browser Compatibility</li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-muted">Backend</h5>
                    <ul className="skills">
                        <li>Node.js, Express.js</li>
                        <li>PHP (CodeIgniter)</li>
                        <li>REST API Development</li>
                        <li>Responsive Web Design</li>
                        <li>Authentication & Authorization</li>
                        <li>Data Validation & Error Handling</li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-muted">Database</h5>
                    <ul className="skills">
                        <li>MySQL</li>
                        <li>SQLite</li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-6 col-sm-12'>
                <div>
                    <h5 className="text-muted">Tools & Platforms</h5>
                    <ul className="skills">
                        <li className='list-style-cir'>Git & GitHub</li>
                        <li className='list-style-cir'>Postman</li>
                        <li className='list-style-cir'>WordPress</li>
                        <li className='list-style-cir'>Browser Developer Tools</li>
                        <li className='list-style-cir'>MySQL Workbench</li>
                        <li className='list-style-cir'>REST APIs & JSON</li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-muted">Additional Strengths</h5>
                    <ul className="skills">
                        <li className='list-style-cir'>JavaScript Logical Problem-Solving</li>
                        <li className='list-style-cir'>SEO Basics & WordPress Optimization</li>
                        <li className='list-style-cir'>Agile Team Collaboration</li>
                        <li className='list-style-cir'>Willingness to learn new tools & technologies</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills