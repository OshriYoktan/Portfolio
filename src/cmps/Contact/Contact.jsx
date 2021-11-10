import './Contact.scss'
import { useForm } from '../../hooks/useForm'
import github from '../../assets/icons/github.png'
import instagram from '../../assets/icons/instagram.png'
import linkedin from '../../assets/icons/linkedin.png'
import me from '../../assets/oshri.png'



export const Contact = () => {
    const [newMail, handleChange] = useForm({ subject: "", body: "" })
    const mail = 'oshriyok1@gmail.com'
    const onSendMail = () => {
        window.open(`mailto:${mail} ?subject=${newMail.subject}&body=${newMail.body}`);
    }
    return (
        <div className="contact-container">
            <form className="contact" onSubmit={() => onSendMail()}>
                <h4>Contact me</h4>
                <h2>Subject</h2>
                <input autoComplete="off" type="text" onChange={handleChange} id="subject" name="subject" />
                <h2>Body</h2>
                <textarea onChange={handleChange} id="body" name="body" cols="30" rows="8"></textarea>
                <button>Send</button>
            </form>
            <div className="contact-about">
                <img className="me" src={me} alt="" />
                <p>Oshriyok1@gmail.com</p>
                <p>050-2355496</p>
                <div className="social-links">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/oshri-yoktan/" ><img className="social-images" src={linkedin} alt="" /></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/OshriYoktan" ><img className="social-images" src={github} alt="" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/oshri_yoktan/" ><img className="social-images" src={instagram} alt="" /></a>
                </div>
            </div>
        </div>
    )
}
