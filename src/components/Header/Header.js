import React, {Component} from "react";
import styles from "./Header.module.css";
import { HashLink } from "react-router-hash-link";
import {BrowserRouter} from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <nav>
        <div>
          <input
            id="filter"
            type="text"
            placeholder="Search recipes"
            className={styles.searchBox}
          />
          <i className={`fa fa-search ${styles.filterSubmit}`}></i>
          <div className={styles.right}>
            <BrowserRouter>
            <HashLink to="/#aboutUs">
              <p className={styles.aboutUs} style={{ color: "black" }}>About Us</p>
            </HashLink>
            <HashLink to="/#contact">
              <p className={styles.contact} style={{ color: "black" }}>
                Contact
              </p>
            </HashLink>
            <i className={`far fa-user-circle fa-2x ${styles.userIcon}`}></i>
            </BrowserRouter>
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;
