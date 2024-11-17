import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import linkedin_icon from "../../assets/linkedin_icon.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_REACT_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s discuss</h1>
          <p>
            I&apos;m currently open to new job opportunities and projects.
            Whether you&apos;re looking for a developer to bring your ideas to
            life or have a specific project in mind, I&apos;d love to hear from
            you! Feel free to contact anytime. Let&apos;s create something
            amazing together!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail_icon" /> <p>hadungwrabrahma2@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call_icon" /> <p>+91-88119-75497</p>
            </div>
            <div className="contact-detail">
              <img src={linkedin_icon} alt="linkedin_icon" />{" "}
              <p>
                <a
                  href="https://www.linkedin.com/in/hadungwra-brahma"
                  target="_blank"
                >
                  linkedin.com/in/hadungwra-brahma
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location_icon" /> <p>Kokrajhar, Assam, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Enter your name"
            name="name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            name="email"
          />
          <label htmlFor="message">Write your messege here</label>
          <textarea
            id="message"
            name="message"
            required
            rows="8"
            placeholder="Enter your messege"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
