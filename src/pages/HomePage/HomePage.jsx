import './HomePage.scss'
import github from '../../assets/icons/github.png'
import instagram from '../../assets/icons/instagram.png'
import linkedin from '../../assets/icons/linkedin.png'
import react from '../../assets/skills-icon/react.svg'
import vue from '../../assets/skills-icon/vue.svg'
import node from '../../assets/skills-icon/node.svg'
import database from '../../assets/skills-icon/database.svg'
import server from '../../assets/skills-icon/server.svg'
import sass from '../../assets/skills-icon/sass.svg'
import mobile from '../../assets/skills-icon/mobile.svg'
import code from '../../assets/skills-icon/code.svg'
import { Link } from 'react-router-dom';


export const HomePage = () => {
    return (
        <div className="home-container" >
            <div className="home-page">
                <div className="main-hero">
                    <div><h1>Oshri <br /> Yoktan</h1>
                        <div className="bar"></div>
                    </div>
                    <div className="social-links">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/oshri-yoktan/" ><img className="social-images" src={linkedin} alt="" /></a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/OshriYoktan" ><img className="social-images" src={github} alt="" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/oshri_yoktan/" ><img className="social-images" src={instagram} alt="" /></a>
                    </div>
                </div>
                <div className="main-about">
                    <h4>About me</h4>
                    <h2>Full Stack / Frontend <br /> Developer</h2>
                    <p>Full-Stack Web Developer specializing in advanced frameworks including React, VueJS, NodeJS and MongoDB. <br />
                        Army service at the Israeli Air Force Operations Room. <br />
                        Passionate about technology, striving to be the best, fast learner, and a team player. <br />
                        Excellent organizational skills, out of the box creative thinker and Work well under pressure.</p>
                    <Link to="/portfolio">Have a look at my projects</Link>
                </div>
            </div>
            <div className="Specialities">
                <h4>Specialities</h4>
                <div className="skills">
                    <div className="skills-bar"></div>
                    <h2>Top popular frameworks include state management</h2>
                </div>
                <div className="skills-container">
                    <div className="skill-name">
                        <p></p>
                        <div className="skill-img">
                            <img className="social-images" src={react} alt="" />
                            <h2>React</h2>
                        </div>
                    </div>
                    <div className="skill-name">
                        <p></p>
                        <div className="skill-img">
                            <img src={vue} alt="" />
                            <h2>Vue</h2>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <div className="skills-bar"></div>
                    <h2>Express, Node.js, Server-side programming and databases</h2>
                </div>
                <div className="skills-container">
                    <div className="skill-name">
                        <p></p>
                        <div className="skill-img">
                            <img className="social-images" src={node} alt="" />
                            <h2>Node.js</h2>
                        </div>
                    </div>
                    <div className="skill-name">
                        <p></p>
                        <div className="skill-img">
                            <img src={database} alt="" />
                            <h2>MongoDB and MySQL</h2>
                        </div>
                    </div>
                    <div className="skill-name">
                        <p></p>
                        <div className="skill-img">
                            <img src={server} alt="" />
                            <h2>REST API</h2>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <div className="skills-bar"></div>
                    <h2>Modern and responsive design, short and practical code</h2>
                </div>
                <div className="skills-container">
                    <div className="skill-name">
                        <p></p>
                        <div className="skill-img">
                            <img className="social-images" src={sass} alt="" />
                            <h2>Sass</h2>
                        </div>
                    </div>
                    <div className="skill-name">
                        <p></p>
                        <div className="skill-img">
                            <img src={mobile} alt="" />
                            <h2>Responsive Design</h2>
                        </div>
                    </div>
                    <div className="skill-name">
                        <p></p>
                        <div className="skill-img">
                            <img src={code} alt="" />
                            <h2>Practical Development</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
