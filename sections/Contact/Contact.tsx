import React from "react";
import "./contact.css";

/* Contact component: Displays contact information and a form for users to send messages */
function Contact() {
  return (
    <section
      className="content-section text-white"
      id="contact"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <div className="container">
        <div className="row">
          {/* Header with contact information */}
          <div className="col-lg-12 text-center">
            <h2 className="section-heading mb-2 black-heading">Contact Me</h2>
            <h5 className="contact-info">
              Email:{" "}
              <a className="lead" href="mailto:weijinlinkoi@gmail.com">
                weijinlinkoi@gmail.com
              </a>{" "}
              ||{" "}
              <a className="lead" href="mailto:jinlin_wei@brown.edu">
                jinlin_wei@brown.edu
              </a>
            </h5>
            <br />
            <h5 className="section-subheading lead text-faded">
              ...or use the following form
            </h5>
          </div>
        </div>

        {/* Contact form */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="row">
                {/* Left column: Name, email, and phone inputs */}
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name *"
                      id="name"
                      required
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email *"
                      id="email"
                      required
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone"
                      id="phone"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                {/* Right column: Message textarea */}
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message *"
                      id="message"
                      required
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                {/* Submit button */}
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button type="submit" className="send-message-button">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
