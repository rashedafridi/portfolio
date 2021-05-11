import "./sideContactElement.css"
import pngg from "../asset/about.png";
//icons

import { FaPython, FaGithub, FaLink } from 'react-icons/fa';

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
                        <a href="https://github.com/rashedafridi" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/rashedafridi" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                            <span className="svg"><FaGithub /></span>
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