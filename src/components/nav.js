import "./nav.css";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import NavMobile from "./navMobile"
import NavDesktop from "./navDesktop"

// icons
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  
  const [navClicked, setNavClicked] = useState(false);
  let offset = -70;

  const handleClick = () => {
    setNavClicked(!navClicked);
  };
  const [navbar, setNavbar] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 900;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  return (
    <div className="container">
      <div className={` ${navbar ? " nav-wrapper active":" nav-wrapper"} `} >
        <div className={"nav-container"}>
          <span className="logo" onClick={() => scroll.scrollToTop()}>
            &lt; Rashed Afridi &gt;
      </span>
          {/* Mobile Menu Icon */}
          <div className="menu-icon" onClick={handleClick}>
            <i>{navClicked ? <AiOutlineClose /> : <AiOutlineMenu />}</i>
          </div>
          {width <= breakPoint ? <NavMobile offset={offset} navClicked={navClicked} /> : <NavDesktop offset={offset} />}
        </div>
      </div>
    </div>
  );
};

export default Nav;
