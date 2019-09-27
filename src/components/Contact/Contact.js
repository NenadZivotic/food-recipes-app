import React, { Component } from "react";
import styles from "./Contact.module.css";
import Swal from "sweetalert2";

class Contact extends Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    message: "",
    success: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, lastname, email, message } = this.state;
    localStorage.setItem("Name", name);
    localStorage.setItem("LastName", lastname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Message", message);

    e.target.reset();
    this.handleSuccess();
  };

  handleSuccess = () => {
    Swal.fire({
      position: "center",
      type: "success",
      title: "Your message has been sent!",
      showConfirmButton: false,
      timer: 2000
    });
  };

  render() {
    return (
      <section className={`py-5 ${styles.contactContainer}`} id="contact">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <h1 className={`mx-auto ${styles.contactH1}`}>Contact</h1>

            <form className="mt-5" onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <input
                  required
                  id="name"
                  onChange={this.handleChange}
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <input
                  required
                  id="lastname"
                  onChange={this.handleChange}
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>

              <div className="form-group">
                <input
                  required
                  id="email"
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <textarea
                  required
                  id="message"
                  onChange={this.handleChange}
                  name="message"
                  className="form-control"
                  rows="10"
                  placeholder="Leave Your Message!"
                ></textarea>
              </div>

              <div className="form-group mt-3 text-center">
                <input type="submit" className={`${styles.contactButton} col-md-2`} />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
