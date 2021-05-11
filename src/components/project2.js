import "./project2.css"
import pngg from "../asset/about.png";
//icons
import { DiMongodb, DiJava, DiAndroid } from 'react-icons/di';
import { SiAdobepremiere, SiMysql, SiJavascript, SiPhp, SiTailwindcss, SiLaravel, SiDjango, SiJquery, SiRedux } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { FaPython, FaGithub ,FaLink} from 'react-icons/fa';
import { BsBootstrapFill } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import { GrDocker } from 'react-icons/gr';
function Project() {
    return (
        <>
            <section id="Project">
            <div className="container">
                <h2>Some Things I’ve Built</h2>
                <ul className="project-container dnNJYD">
                    <li className="huabVa">
                        <div className="project-detail project-content">
                            <div>
                                <p className="project-overline">Featured Project</p>
                                <h3 className="project-title the">
                                    <a href="https://octoprofile.now.sh"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        OctoProfile
                                </a>
                                </h3>
                                <div class="project-description">
                                    <p>A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars.
                                 Sort through your top repos by number of stars, forks, and size.</p>
                                </div>
                                <ul class="project-tech-list">
                                    <li>Next.js</li>
                                    <li>Chart.js</li>
                                    <li>GitHub API</li>
                                </ul>
                                <div class="project-links">
                                    <a href="https://github.com/rashedafridi"
                                        aria-label="GitHub Link" rel="noopener noreferrer"
                                        target="_blank">
                                        <FaGithub/>
                                    </a>
                                    <a href="https://github.com/rashedafridi"
                                        aria-label="External Link" class="external"
                                        rel="noopener noreferrer" target="_blank">
                                        <FaLink/>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="project-image">
                        <div className="">
                            <img src={pngg} alt="" srcset="" width="400px" />
                        </div>
                            
                        </div> 
                    </li>

                    <li className="huabVa">
                        <div className="project-detail project-content">
                            <div>
                                <p className="project-overline">Featured Project</p>
                                <h3 className="project-title the">
                                    <a href="https://octoprofile.now.sh"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        OctoProfile
                                </a>
                                </h3>
                                <div class="project-description">
                                    <p>A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars.
                                 Sort through your top repos by number of stars, forks, and size.</p>
                                </div>
                                <ul class="project-tech-list">
                                    <li>Next.js</li>
                                    <li>Chart.js</li>
                                    <li>GitHub API</li>
                                </ul>
                                <div class="project-links">
                                    <a href="https://github.com/rashedafridi"
                                        aria-label="GitHub Link" rel="noopener noreferrer"
                                        target="_blank">
                                        <FaGithub/>
                                    </a>
                                    <a href="https://github.com/rashedafridi"
                                        aria-label="External Link" class="external"
                                        rel="noopener noreferrer" target="_blank">
                                        <FaLink/>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="project-image">
                        <div className="img">
                            <div >
                                <img src={pngg} alt="" srcset="" width="400" />
                            </div>
                            
                        </div>
                            
                        </div> 
                    </li>
                </ul>
                </div>
            </section>
        </>
    )
}
export default Project