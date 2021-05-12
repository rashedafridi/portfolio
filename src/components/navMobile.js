import { AiFillHome } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { GiFilmProjector } from "react-icons/gi";
import { TiContacts } from "react-icons/ti";
import "./nav.css";
import { Link } from "react-scroll";
const Nav = ({offset , navClicked}) => {
    return(
        <ul className={navClicked ? "nav-links active " : "nav-links "}>
        <li className={"icon-box "}>
          <Link
            className={`mlink `}
            activeClass="active"
            to="home"
            spy={true}
            hashSpy={true}
            smooth={true}
            delay={100}
            offset={offset}
            duration={500}
          >
            <div className=" link-title"> Home</div>
          </Link>
          <i className="icon ">
            <AiFillHome />
          </i>
        </li>

        <li className="icon-box">
          <Link
            className="mlink"
            activeClass="active"
            to="skills"
            spy={true}
            hashSpy={true}
            smooth={true}
            delay={100}
            offset={offset}
            duration={500}
          >
            <div className=" link-title"> Skills</div>
          </Link>
          <i className="icon ">
            <BsGraphUp />
          </i>
        </li>
        <li className={"icon-box "}>
          <Link
            className={`mlink `}
            activeClass="active"
            to="Project"
            spy={true}
            hashSpy={true}
            smooth={true}
            delay={100}
            offset={offset}
            duration={500}
          >
            <div className=" link-title"> Project</div>
          </Link>
          <i className="icon ">
            <GiFilmProjector />
          </i>
        </li>
        <li className={"icon-box "}>
          <Link
            className={`mlink `}
            activeClass="active"
            to="contact"
            spy={true}
            hashSpy={true}
            smooth={true}
            delay={100}
            offset={offset}
            duration={500}
          >
            <div className=" link-title"> Contact</div>
          </Link>
          <i className="icon ">
            <TiContacts />
          </i>
        </li>
      </ul>
    )
}
export default Nav