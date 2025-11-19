import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  function sendForm() {
    if (name === "" || email === "" || description === "") {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage("Your message has been sent!");
    setName("");
    setEmail("");
    setDescription("");
  }

  return (
    <div className="contact-page">

      <div className="contact-left">
        <h1 className="contact-title">Contact:</h1>

        <p><strong>Mail:</strong> mekaydgn@gmail.com</p>
        <p><strong>Phone:</strong> +31 06 18 58 41 16</p>
        <p><strong>Socials:</strong> mek.ayd</p>
      </div>

      <div className="contact-right">
        
        <div className="input-group">
          <label>Name:</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Description:</label>
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <button className="send-btn" onClick={sendForm}>Send</button>

        {message !== "" && <p className="status-message">{message}</p>}
      </div>

    </div>
  );
}

export default Contact;