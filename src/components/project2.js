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
                                        3 page candy shop website where user can bye all sort of sweet .website includes home page, card/checkout page and admin page.
                                        
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
                                        <p>google keep lookalike, notetaking app. build with reactJS
                                        For frontend I used react, hook, and Axios for frontend to backend communication.
                                        For backend I used node with Express to crest Rest-API. I used MongoDB as database.
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
                                        <p>teacher-lagbe is a website where privat tutor can creat there profile so that student can contact them .
                                        in this project i used Vue-Router,VueX,firebase
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