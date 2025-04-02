import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contactWrapper">
        <div className="title" id="contact">Contact</div>

        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Get in Touch</h1>
          <p>
            If you have any questions, project opportunities, or just want to
            say hi, feel free to reach out using the form below. I’m always open
            to discussing new ideas and collaborations.
          </p>
          <label>Full Name</label>
          <input placeholder="Enter Your Full Name" />
          <label>Email</label>
          <input placeholder="Enter Your Email Address" />
          <label>Message</label>
          <textarea placeholder="Enter Your Message" />
          <button className="btn">Submit</button>
        </form>
      </div>
      <div className="letsConnect1">
        <label>LET'S CONNECT</label>
        <ul>
          <li>
            <i class="bi bi-envelope"></i> nikhil.punse5@gmail.com
          </li>
          <li>
            <i class="bi bi-github"></i> Github link
          </li>
          <li>
            <i class="bi bi-telephone"></i> 9146346830
          </li>
        </ul>
      </div>
      <div className="letsConnect2">
        <p>Thank you for visiting my portfolio. I am always eager to collaborate on interesting projects and take on new challenges. Let’s build something amazing together.</p>
      </div>
      <div className="letsConnect3">
        <label>2025 All © rights reserved</label>
        <label>Own by Nikhil punse</label>
      </div>
    </div>
  );
};

export default Contact;
