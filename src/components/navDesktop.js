
import { animateScroll as scroll, Link } from "react-scroll";
import './nav.css';
const Nav = ({offset}) => {
    return(
        <ul className={"nav-links"}>
        <li className="link">
          <Link
            className={ "anchor"}
            activeClass="active"
            to="home"
            spy={true}
            hashSpy={true}
            smooth={true}
            delay={100}
            offset={offset}
            duration={500}
          >
          Home
          </Link>
        </li>

        <li className="link">
          <Link
            className={ "anchor"}
            activeClass="active"
            to="skills"
            spy={true}
            hashSpy={true}
            smooth={true}
            delay={100}
            offset={offset}
            duration={500}
          >
            Skills
          </Link>
        </li>

        <li className="link">
          <Link
            className={ "anchor"}
            activeClass="active"
            to="Project"
            delay={100}
            spy={true}
            smooth={true}
            offset={offset}
            hashSpy={true}
            duration={500}
          >
            Project
          </Link>
        </li>

        <li className="link">
          <Link
            className={ "anchor"}
            activeClass="active"
            to="contact"
            delay={100}
            hashSpy={true}
            spy={true}
            smooth={true}
            offset={offset}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    )
}
export default Nav