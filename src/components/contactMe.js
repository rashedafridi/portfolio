import contact from "../asset/contact.svg"
import "./contactMe.css"

export default function ContactMe() {
    return (<>
        <section id="contact">
            <div className="dJwzEo">
                <h2> Contact Me</h2>
                <div className="icPAF">
                    <form >

                        <div className="dIOxDO"><input className="dolPUu" type="text" placeholder="Name" /></div>
                        <div className="dIOxDO"><input className="dolPUu" type="email" placeholder="Email" /></div>
                        <div className="dIOxDO"> <input className="dolPUu" type="text" placeholder="subject" /></div>
                        <div className="dIOxDO"><textarea className="dolPUu" placeholder="Email detail........" name="detail" id="" cols="30" rows="10"></textarea></div>
                        <div class=" ksNaio"><button type="submit" class=" cuWRXQ" disabled >Submit</button></div>
                    </form>
                </div>
                <div className="juTbfV">
                    <img src={contact} alt="contact" />
                </div>
            </div>
        </section>
    </>)
}
