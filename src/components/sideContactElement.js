import "./sideContactElement.css"
//icons

import {  FaGithub ,FaLinkedinIn } from 'react-icons/fa';
import {  FiFacebook } from 'react-icons/fi';
function SideContactElement() {
    return (
        <>
            <div orientation="left" className="hOvuuP">
                <ul className=" dVLQAC ">
                    <li>
                        <a href="https://github.com/rashedafridi" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rashedafridi/" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/rashed.afridi.1/" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                            <FiFacebook/>
                        </a>
                    </li>
                </ul>

            </div>
            <div className="jSIwrL">
                <div className="jJFfEJ" >
                    <a href="rashedafridi@gmail.com">
                        RashedAfridi@gmail.com
                </a>
                </div>
            </div>

        </>)
}
export default SideContactElement