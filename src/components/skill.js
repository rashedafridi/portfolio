import "./skill.css"
//icons
import { DiMongodb,DiJava,DiAndroid } from 'react-icons/di';
import { SiAdobepremiere,SiMysql,SiJavascript ,SiPhp,SiTailwindcss,SiLaravel,SiDjango,SiJquery,SiRedux } from 'react-icons/si';
import { FaReact,FaNodeJs } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { FaPython,FaGithub } from 'react-icons/fa';
import { BsBootstrapFill } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import { GrDocker } from 'react-icons/gr';
function skill() {
    return (
        <>
            <section id="skills">
            <div className="container">
                <h2>The skills I have</h2>
                <div className="skill">

                    <div className="skill-container">
                        <h3 className="skill-heading" >Programming Languages</h3>
                        
                            <span className="skill-icon"><SiJavascript/></span>
                            <span className="skill-icon"><FaPython/></span>
                            <span className="skill-icon">C++</span>
                            <span className="skill-icon"><DiJava/></span>
                            <span className="skill-icon"><SiPhp/></span>   
                    </div>
                    <div className="skill-container">
                        <h3 className="skill-heading">liberty /framework:</h3>

                        <span className="skill-icon"><BsBootstrapFill/></span>
                        <span className="skill-icon"><FaVuejs/></span>
                        <span className="skill-icon"><FaNodeJs/></span>
                        <span className="skill-icon"><FaReact/></span> 
                        <span className="skill-icon"><SiTailwindcss/></span>
                        <span className="skill-icon"><SiLaravel/></span>  
                        <span className="skill-icon"><SiDjango/></span> 
                        <span className="skill-icon"><SiJquery/></span>
                        <span className="skill-icon"><SiRedux/></span>  
                        <span className="skill-icon"><DiAndroid/></span> 
                        <span className="skill-label">axios</span> 
                    </div>
                    <div className="skill-container">
                        <h3 className="skill-heading">Database</h3>

                        <span className="skill-icon"><DiMongodb/></span>
                        <span className="skill-icon"><SiMysql/></span> 
                    </div>
                    <div >
                        <h3 className="skill-heading">Tools</h3>

                        <span className="skill-icon"><FaGithub/></span>
                        <span className="skill-icon"><FiFigma/></span> 
                        <span className="skill-icon"><GrDocker/></span>
                        <span className="skill-icon"><SiAdobepremiere/></span>
                    </div>

                </div>
                <div className="skill">
                <h3 className="skill-heading">General concept I am familiar with</h3>
                <span className="skill-label">OOP</span> 
                <span className="skill-label">Data Structure</span> 
                <span className="skill-label">Computer Network</span> 
                <span className="skill-label">Machine Learning</span> 
                </div>
                </div>
            </section>
        </>
    )
}
export default skill