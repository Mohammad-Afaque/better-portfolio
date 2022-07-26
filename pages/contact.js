import React from "react";
import emailjs from "emailjs-com";
import Nav from "./components/nav";

export default function contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_4qwgguz",
        e.target,
        "user_kKOJw2gTiTNkKSAcFLVsx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <title>How to Reach Me</title>
      <Nav />
      <main id="contact">
        <h1 className="lg-heading">
          Contact
          <span className="text-secondary"> Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <form
            action="#"
            method="post"
            className="contact-form"
            onSubmit={sendEmail}
          >
              <input
                type="text"
                id="your-name"
                placeholder="Your Name..."
                name="name"
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email..."
                name="email"
              />

              {" "}
              <input
                type="text"
                id="your-subject"
                placeholder="Subject..."
                name="subject"
              />
              <textarea
                className="textarea"
                name="message"
                id="message"
                placeholder="Leave your message..."
              ></textarea>
              <input
                type="submit"
                className="bg-secondary submit"
                value="Send Message"
              />
          </form>
        </div>
      </main>
    </>
  );
}
