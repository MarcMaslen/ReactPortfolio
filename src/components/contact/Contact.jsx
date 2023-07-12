import "./contact.scss";
import ContactForm from "../email/ContactForm";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="main">
        <h2>Contact.</h2>
        <ContactForm />
      </div>
    </div>
  );
}
