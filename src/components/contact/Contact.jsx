import "./contact.scss";
import ContactForm from "../email/ContactForm";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <ContactForm />
      </div>
    </div>
  );
}
