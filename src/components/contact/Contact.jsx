import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/hijabiWorking.jpeg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me!</h2>
        <form action="https://formsubmit.co/remasbashanfar1@gmail.com" method="POST" onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" required />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you :)</span>}
        </form>
      </div>
    </div>
  );
}
