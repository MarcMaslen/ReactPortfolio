import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


// const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessage(true);
//   };

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjqbnvj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form  onSubmit={handleSubmit}>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email Address"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Write your message here!"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
