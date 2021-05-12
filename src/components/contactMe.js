import contact from "../asset/contact.svg"
import "./contactMe.css"

export default function ContactMe() {
    return (<>
        <section id="contact">
        <div className="container">
            <div className="dJwzEo">
                <h2 className="h2tag"> <span>Contact</span>  Me</h2>
                <div data-aos="fade-up" className="icPAF">
                    <form >

                        <div className="dIOxDO"><input className="dolPUu" type="text" placeholder="Name" /></div>
                        <div className="dIOxDO"><input className="dolPUu" type="email" placeholder="Email" /></div>
                        <div className="dIOxDO"> <input className="dolPUu" type="text" placeholder="subject" /></div>
                        <div className="dIOxDO"><textarea className="dolPUu" placeholder="Email detail........" name="detail" id="" cols="30" rows="10"></textarea></div>
                        <div className=" ksNaio"><button type="submit" className=" cuWRXQ" disabled >Submit</button></div>
                    </form>
                </div>
                <div data-aos="fade-down" className="juTbfV">
                    <img src={contact} alt="contact" />
                </div>
            </div>
            </div>
        </section>
    </>)
}
