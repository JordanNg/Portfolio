import React from "react";
import "./Footer.css";
import linkedin from "./Logos/LinkedIn-Logos/LI-In-Bug.png";
import mark from "./Logos/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", email: "" };
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="footer__container">
        <div className="app__title footer">Contact Me</div>
        <form className="footer__contact">
          <input
            className="footer__contactField"
            placeholder="Name"
            id="name__box"
            type="text"
            onChange={this.handleNameChange}
            required
            value={this.state.name}
          ></input>
          <input
            className="footer__contactField"
            placeholder="Enter email"
            id="email__box"
            type="email"
            onChange={this.handleEmailChange}
            value={this.state.email}
          ></input>
          <textarea
            className="footer__contactFieldLarge"
            id="message__box"
            name="test-mailing"
            onChange={this.handleMessageChange}
            placeholder="Your message"
            value={this.state.feedback}
          />
          <input
            type="submit"
            value="Submit"
            className="footer__button"
            onClick={this.handleSubmit}
          />
        </form>

        <div className="logo__container">
          <a
            className="logo__image"
            href="https://www.linkedin.com/in/jordan-ng-639218139/"
          >
            <img className="logo__image" src={linkedin} alt="linkedin__image" />
          </a>
          <a className="logo__image" href="https://github.com/JordanNg">
            <img className="logo__image" src={mark} alt="mark__image" />
          </a>
        </div>
      </div>
    );
  }

  handleMessageChange(event) {
    this.setState({ feedback: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit() {
    /* Clear each of the specified fields */
    document.getElementById("message__box").value = "";
    document.getElementById("email__box").value = "";
    document.getElementById("name__box").value = "";

    const templateId = "template_bOEaJjeW";

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email,
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
}
