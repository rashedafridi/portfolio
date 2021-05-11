import Nav from "../components/nav";
import SideContactElement from "../components/sideContactElement";
import Heading from "../components/heading";
import Skill from "../components/skill";
import Project from "../components/project";
import Project2 from "../components/project2";
import ContactMe from "../components/contactMe";
import Footer from "../components/footer";
import "../index.css"
function home() {
    // useEffect(() => {
    //   Aos.init({ duration: 2000, offset: 200 });
    // }, []);
  
    return (
      <>
      <SideContactElement/>
      <div >
        <Nav />
        <Heading />
        <Skill />        
        {/* <Project /> */}
        <Project2 />
        <ContactMe />
        <Footer />
      </div>
      </>
    );
  }
  
  export default home;