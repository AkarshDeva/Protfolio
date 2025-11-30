import "./styles/Contact.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_skt43u7",
        "template_x02sn8c",
        formData,
        "86nCwLh6lnDysqpLM"
      )
      .then(
        () => {
          alert("Message Sent Successfully! 🚀");
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact <span>Me!</span></h2>

      <form onSubmit={sendEmail} className="contact-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Mobile Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Email Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="send-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
