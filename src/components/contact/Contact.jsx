import "./contact.scss";
import ContactForm from "../email/ContactForm";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="main">
        <p>Contact</p>
        <h2>Let’s talk about the next thing worth building.</h2>
        <div className="contactLinks">
          <a href="mailto:marcmaslen123@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/marc-maslen-489b48189/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/MarcMaslen" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
