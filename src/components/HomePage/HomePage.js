import React, { Component } from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { HashLink } from "react-router-hash-link";
import Contact from "../../components/Contact/Contact";

class HomePage extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.data)
      .then(data => {
        this.setState({ recipes: data.categories });
      });
  }

  render() {
    return (
      <div>
        <section className="container" style={{ paddingTop: "200px" }}>
          <div className="row">
            <div className="col">
              <h1>Food Recipes</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                obcaecati itaque ex maiores! Eius illo eligendi animi aspernatur
                in et iusto iste aperiam tempore sit nostrum fugit, voluptates
                placeat facere. Maiores minus omnis cum animi magnam voluptates,
                reprehenderit incidunt illo aperiam sed odio a, quas qui sit
                labore molestias sequi ducimus non accusantium quis consequuntur
                sint tempora? Aliquam, praesentium voluptatem.
              </p>
              <HashLink to="/#category">
                <button className={styles.homeButton}>
                  Categories <i className="fas fa-chevron-down"></i>
                </button>
              </HashLink>
            </div>
            <div className="col">
              <img
                className={styles.homeImg}
                src={require("../../assets/images/HEADER IMAGE.png")}
                alt="headerImg"
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className={`row ${styles.category}`} id="category">
              {this.state.recipes.map(recipe => {
                return (
                  <div className="col" key={recipe.idCategory}>
                    <div className="col">
                      <Link to={`category/${recipe.strCategory}`}>
                        <img
                          src={recipe.strCategoryThumb}
                          alt="recipes"
                          className={"rounded mx-auto d-block"}
                        />
                      </Link>
                      <p className="text-center">
                        <b>{recipe.strCategory}</b>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="container" id="aboutUs">
          <div className="row">
            <div className="col">
              <h1 style={{ borderBottom: "2px solid gray", width: "11rem" }}>
                About Us
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
            <div className="col">
              <img
                className={styles.aboutUsImg}
                src={require("../../assets/images/ABOUT US.jpg")}
                alt="about"
                style={{ width: "600px" }}
              />
            </div>
          </div>
        </section>
        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default HomePage;
