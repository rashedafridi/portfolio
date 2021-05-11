import React, { useState, useEffect } from "react";
import "./heading.css";
import laptopSvg from "../asset/Asset.svg";
import pngg from "../asset/about.png";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const contentVariants = {
  initial: {
    translateY: "100vh",
    opacity: 0,
  },

  animate: {
    translateY: "0vh",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
      // staggerChildren: 0.4,
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
    x: -200,
    transition: { duration: 0.2 },
  },
};

const Home = () => {
  // State
  const [showHeadingOne, setShowHeadingOne] = useState(true);
  const [showHeadingTwo, setShowHeadingTwo] = useState(false);

  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne) {
        setShowHeadingOne(false);
        setShowHeadingTwo(true);
      } else {
        setShowHeadingOne(true);
        setShowHeadingTwo(false);
      }
    }, 3000);
  }, [showHeadingOne, showHeadingTwo]);

  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h4 className="welcome-content">Welcome To My Website</h4>
        <br />
        <h1 className="main-content">
          Hi ✋, I’m Md Rashed Afridi
          <motion.span
            drag={true}
            dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
            className="hand"
            animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
            transition={{ yoyo: Infinity, duration: 1.7 }}
          >
          </motion.span>{" "}
        </h1>
        {/* Animate Skill Content */}

        <div className="skill-animation">
          <AnimatePresence>
            {showHeadingOne && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                Full Stack Web Developer
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingTwo && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                MERN Stack Developer
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
        <p className="paragraph">
        I'm a french graduate from <strong>UIU</strong>  in computer science and engineering.
        I'm working towed becoming fullStack Developer , but I am also interested in mobile and meshing learning development ☺.
        So you can say that I am a very curious learner.
        </p>
        {/* // */}

        <h2>
          {" "}
          from Bangladesh{" "}
          {/* <span role="img" aria-label="Bangladesh Flag">
            BD
          </span> */}
        </h2>

        <div className="button-wrapper">
          <button
            className="button contact-btn"
            onClick={() => scroll.scrollToBottom()}
          >
            Contact Me
          </button>
          <a
            href="https://drive.google.com/file/d/1Hy41w1PJSU5HITTEQOWvg_8vonp4xDRr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Resume</button>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="svg-container"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        {/* <img className="svg" src={laptopSvg} alt="" /> */}
        <img className="svg" src={pngg} alt="" />
      </motion.div>
      
    </section>
  );
};

export default Home;
