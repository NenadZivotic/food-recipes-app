import React, { Component } from "react";
import styles from "./Header.module.css";
import { HashLink } from "react-router-hash-link";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

class Header extends Component {
  state = {
    password: "",
    email: "",
    showForm: false,
    logged: false,
    searchMeal: ""
  };

  toggleForm = e => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  loginHandler = e => {
    const userEmail = this.state.email;
    const password = this.state.password;

    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", password);

    this.setState({
      showForm: false,
      logged: true
    });

    if (!userEmail || !password) {
      alert("Please fill in Login form!");
      localStorage.setItem("email", "");
      localStorage.setItem("password", "");
      this.setState({
        logged: false
      });
    } else {
      Swal.fire(`Welcome!`);
    }

    this.valuesHandler();
    e.preventDefault();
  };

  logoutHandler = e => {
    this.setState({
      logged: false,
      showForm: false
    });
    localStorage.setItem("email", "");
    localStorage.setItem("password", "");
  };

  valuesHandler = e => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    this.setState({
      email,
      password
    });
  };

  onSearch = e => {
    const value = document.getElementById("filter").value;
    this.props.history.push(`/search/${value}`);
  };

  render() {
    return (
      <div>
        <nav>
          {this.state.logged ? (
            <div>
              <input
                id="filter"
                type="text"
                placeholder="Search recipes"
                className={styles.searchBox}
              />
              <i className={`fa fa-search ${styles.filterSubmit}`}></i>
              <div className={styles.right}>
                <HashLink to="/#aboutUs">
                  <p className={styles.aboutUs} style={{ color: "black" }}>
                    About Us
                  </p>
                </HashLink>
                <HashLink to="/#contact">
                  <p className={styles.contact} style={{ color: "black" }}>
                    Contact
                  </p>
                </HashLink>
                <p className={styles.contact}>
                  <Link to="/my-meals" style={{ color: "black" }}>
                    My Meals
                  </Link>
                </p>
                <i
                  className={`far fa-user-circle fa-2x ${styles.userIcon}`}
                  style={{ cursor: "pointer" }}
                  onClick={this.toggleForm}
                ></i>
              </div>
            </div>
          ) : (
            <div>
              <input
                id="filter"
                type="text"
                placeholder="Search recipes"
                className={styles.searchBox}
              />
              <i
                onClick={this.onSearch}
                className={`fa fa-search ${styles.filterSubmit}`}
              ></i>
              <div className={styles.right}>
                <HashLink to="/#aboutUs">
                  <p className={styles.aboutUs} style={{ color: "black" }}>
                    About Us
                  </p>
                </HashLink>
                <HashLink to="/#contact">
                  <p className={styles.contact} style={{ color: "black" }}>
                    Contact
                  </p>
                </HashLink>
                <i
                  onClick={this.toggleForm}
                  className={`far fa-user-circle fa-2x ${styles.userIcon}`}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </div>
          )}
        </nav>
        {this.state.showForm ? (
          <div className={styles.loginForm}>
            <form onSubmit={this.state.loginHandler}>
              {this.state.logged ? (
                <div>
                  <h5 className={styles.leaving}>
                    We are sorry you are leaving! :(
                  </h5>
                  <button
                    onClick={this.logoutHandler}
                    className={styles.logoutFormButton}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="text-center" style={{ marginTop: "10%" }}>
                  <input
                    className={styles.formInput}
                    type="email"
                    id="email"
                    placeholder="Your Email:"
                    required
                    onChange={this.valuesHandler}
                  />
                  <input
                    className={styles.formInput}
                    type="password"
                    id="pass"
                    placeholder="Your Password:"
                    required
                    onChange={this.valuesHandler}
                  />
                  <br />
                  <button
                    onClick={this.loginHandler}
                    className={styles.formButton}
                  >
                    Login
                  </button>
                </div>
              )}
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(Header);
