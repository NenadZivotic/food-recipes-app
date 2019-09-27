import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

class Category extends Component {
  state = {
    recipes: [],
    random: [],
    category: this.props.match.params.meal,
    searchTerm: "",
    value: ""
  };

  timeout = null;

  componentDidMount() {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.state.category}`
      )
      .then(res => res.data)
      .then(data => {
        this.setState({ recipes: data.meals });
      });

    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => res.data)
      .then(data => {
        this.setState({
          random: data.meals
        });
      });
  }

  searchItems = searchTerm => {
    let endpoint = "";
    this.setState({
      recipes: [],
      searchTerm
    });

    if (searchTerm === "") {
      endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.state.category}`;
    } else {
      endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.searchTerm}`;
    }

    this.fetchItems(endpoint);
  };

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            recipes: res.meals
          },
          () => {
            if (this.state.searchTerm !== "") {
              localStorage.setItem(
                "searchRecipe",
                JSON.stringify(this.state.recipes)
              );
            }
          }
        );
      });
  };

  doSearch = e => {
    this.setState({ value: e.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.searchItems(this.state.value);
    }, 500);
  };

  getData = () => {
    const retrievedData = JSON.parse(localStorage.getItem("searchRecipe"));

    return (
      <div>
        {retrievedData.map(res => {
          return (
            <div key={res.idMeal}>
              <img src={res.strMealThumb} alt="meal" />
              <h6>{res.strMeal}</h6>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="container my-5">
          {this.state.random.map(recipe => {
            return (
              <div className="row" key={recipe.idMeal}>
                <div className={`col ${styles.recoTitle}`}>
                  <h1>{recipe.strCategory}</h1>
                  <p>Our recommendation</p>
                  <img
                    className={styles.recoImg}
                    src={recipe.strMealThumb}
                    alt="recoImg"
                  />
                  <h4 className={styles.recoSubTitle}>{recipe.strMeal}</h4>
                </div>

                <div className={`col ${styles.search}`}>
                  <input
                    type="text"
                    placeholder="Search meals"
                    className={styles.searchBox}
                    onChange={this.doSearch}
                    value={this.state.value}
                  />
                  <i className={`fa fa-search ${styles.filterSubmit}`}></i>
                </div>
              </div>
            );
          })}

          <div className={styles.separateDiv}></div>

          {this.state.recipes ? (
            <div className={`row ${styles.singleMeals}`}>
              {this.state.recipes.map(recipe => {
                return (
                  <div className=" mx-auto col  mb-3 " key={recipe.idMeal}>
                    <Link to={`/single-meal/${recipe.idMeal}`}>
                      <img
                        src={recipe.strMealThumb}
                        alt="meals"
                        className={`rounded mx-auto d-block ${styles.singleMealImgs}`}
                      />
                    </Link>
                    <h6 className="text-center">{recipe.strMeal}</h6>
                  </div>
                );
              })}
            </div>
          ) : (
            <h3 className={`text-center ${styles.noRecFound}`}>
              No recipes found!
            </h3>
          )}
        </div>
      </div>
    );
  }
}

export default Category;
