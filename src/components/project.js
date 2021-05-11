import "./project.css"
import pngg from "../asset/about.png";
//icons
import { DiMongodb, DiJava, DiAndroid } from 'react-icons/di';
import { SiAdobepremiere, SiMysql, SiJavascript, SiPhp, SiTailwindcss, SiLaravel, SiDjango, SiJquery, SiRedux } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { FaPython, FaGithub } from 'react-icons/fa';
import { BsBootstrapFill } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import { GrDocker } from 'react-icons/gr';
function Project() {
    return (
        <>
            <section id="Project">
            <div className="container">
            <h2>Some Things I’ve Built</h2>
                <ul className="project-container">
                    <li className="project-item">
                        <div className="project-detail">
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
                                <a href="https://github.com/bchiang7/octoprofile" 
                                aria-label="GitHub Link" rel="noopener noreferrer"
                                 target="_blank">
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 role="img" viewBox="0 0 24 24" fill="none"
                                  stroke="currentColor"
                                   stroke-width="2" 
                                   stroke-linecap="round"
                                    stroke-linejoin="round"
                                     class="feather feather-github"
                                     ><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                     </a>
                                     <a href="https://octoprofile.now.sh" 
                                     aria-label="External Link" class="external"
                                      rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                      </a>
                                      </div>

                            </div>
                        </div>
                        <div class="project-image">
                            <img src={pngg} alt="" srcset="" width="400px"/>
                        </div>
                    </li>
                </ul>
                </div>
            </section>
        </>
    )
}
export default Project