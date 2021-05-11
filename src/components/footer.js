import {FaGithub } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import "./footer.css"
export default function footer() {
    return (
        
        <footer className="footer">
        <div className="container">
            <h3>Rashed Afridi</h3>
            <div  className="footer-container">
                <div>
                    <span>
                        © All rights are reserved | {new Date().getFullYear()} | Made with React
                by{' '}
                        <a href="https://github.com/rashedafridi" rel="noopener noreferrer" target="_blank">
                            Rashed Afridi
                    </a>
                    </span>
                </div>
                <div >
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FiLinkedin/></a>

                </div>
            </div>
            </div>
        </footer>
    )
}