import "./project2.css"
// import pngg from "../asset/about.png";
import candyShop from "../projectImg/ezgif.com-gif-maker2.gif";
// import monster from "../projectImg/monster.gif";
import keep from "../projectImg/keep.png";
import teacherLagbe from "../projectImg/teacherLagbe.png";
//icons

import { FaGithub, FaLink } from 'react-icons/fa';

function Project() {
    return (
        <>
            <section  data-aos="zoom-in-down" id="Project">
                <div className="container">
                    <h2 className="h2tag"> <span> Some Things </span>I’ve Built</h2>
                    <ul className="project-container dnNJYD">
                        <li className="huabVa">
                            <div className="project-detail project-content">
                                <div>
                                    <p className="project-overline"> Project</p>
                                    <h3 className="project-title ">
                                        <a href="https://github.com/rashedafridi/candy-shop-Django"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            Candy Shop
                                </a>
                                    </h3>
                                    <div className="project-description">
                                        <p>
                                        3-page candy shop website where users can buy all sorts of sweets. session-based login and card system .
                                        website includes the home page, cart/checkout page, and admin page. 
                                        </p>
                                    </div>
                                    <ul className="project-tech-list">
                                        <li>Bootstrap</li>
                                        <li>Django</li>
                                        <li>MySQL</li>
                                    </ul>
                                    <div className="project-links">
                                        <a href="https://github.com/rashedafridi/candy-shop-Django"
                                            aria-label="GitHub Link" rel="noopener noreferrer"
                                            target="_blank">
                                            <FaGithub />
                                        </a>
                                        <a href="https://github.com/rashedafridi/candy-shop-Django"
                                            aria-label="External Link" className="external"
                                            rel="noopener noreferrer" target="_blank">
                                            <FaLink />
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="project-image">
                                <div className="img">
                                    <img src={candyShop} alt="candyShop"  />
                                </div>

                            </div>
                        </li>
                        <li className="huabVa">
                            <div className="project-detail project-content">
                                <div>
                                    <p className="project-overline">Project</p>
                                    <h3 className="project-title the">
                                        <a href="https://rashedafridi.github.io/keep-clone-reactJS/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            keep-clone-reactJS
                                </a>
                                    </h3>
                                    <div className="project-description">
                                        <p>google keep lookalike, notetaking app. support full CARD operation.
                                         build with reactJS For the frontend, I used react, hook, and Axios for the frontend to backend communication.
                                          For the backend, I used node with Express to crest Rest-API. also MongoDB as a database.
                                        </p>
                                    </div>
                                    <ul className="project-tech-list">
                                        <li>react.js</li>
                                        <li>Axios.js</li>
                                        <li>MongoDB</li>
                                        <li>Rest-API.</li>
                                    </ul>
                                    <div className="project-links">
                                        <a href="https://github.com/rashedafridi/keep-clone-reactJS"
                                            aria-label="GitHub Link" rel="noopener noreferrer"
                                            target="_blank">
                                            <FaGithub />
                                        </a>
                                        <a href="https://rashedafridi.github.io/keep-clone-reactJS/"
                                            aria-label="External Link" className="external"
                                            rel="noopener noreferrer" target="_blank">
                                            <FaLink />
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="project-image">
                                <div className="img">
                                    <div >
                                        <img src={keep} alt=""  />
                                    </div>

                                </div>

                            </div>
                        </li>
                        <li className="huabVa">
                            <div className="project-detail project-content">
                                <div>
                                    <p className="project-overline">Project</p>
                                    <h3 className="project-title the">
                                        <a href="https://rashedafridi.github.io/vue-teacher-lagbe/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            teacher-lagbe
                                </a>
                                    </h3>
                                    <div className="project-description">
                                        <p>teacher-lagbe is a website where private tutors can create their profiles with their qualifications.
                                         so that students can filter through all the tutors and contact them.
                                         In this project, I used Vue-Router, VueX, and firebase.
                                        </p>
                                    </div>
                                    <ul className="project-tech-list">
                                        <li>Vue.js</li>
                                        <li>firebase</li>
                                    </ul>
                                    <div className="project-links">
                                        <a href="https://github.com/rashedafridi/vue-teacher-lagbe"
                                            aria-label="GitHub Link" rel="noopener noreferrer"
                                            target="_blank">
                                            <FaGithub />
                                        </a>
                                        <a href="https://rashedafridi.github.io/vue-teacher-lagbe/"
                                            aria-label="External Link" className="external"
                                            rel="noopener noreferrer" target="_blank">
                                            <FaLink />
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="project-image">
                                <div className="img">
                                    <div >
                                        <img src={teacherLagbe} alt=""  />
                                    </div>

                                </div>

                            </div>
                        </li>
                    </ul>
                    <div className="but-wrapper ">
                    <a href="https://github.com/rashedafridi/">
                        <button className="but">More Project</button>
                    </a>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Project