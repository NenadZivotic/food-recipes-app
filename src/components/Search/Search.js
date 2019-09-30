import React, { Component } from "react";
import axios from "axios";
import styles from "./Search.module.css";

class Search extends Component {
  state = {
    random: [],
    recipes: [],
    search: this.props.match.params.meal,
    meals: [],
    category: ""
  };

  componentDidMount() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(res => {
        this.setState({
          random: res.data.meals
        });
      });

    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.search}`
      )
      .then(res => {
        this.setState({
          meals: res.data.meals
        });
      });
  }

  render() {
    return (
      <div>
        <div className={`container ${styles.container}`}>
          {this.state.random.map(meal => {
            return (
              <div className="row" key={meal.idMeal}>
                <div className="col">
                  <h1 className={styles.reco}>Our recommendation: </h1>
                  <h2>{meal.strMeal}</h2>
                  <img
                    src={meal.strMealThumb}
                    className={`img-thumbnail ${styles.recoImg}`}
                    alt="meal"
                  />
                  <p className={`${styles.category}`}>
                    <b>Category:</b> {meal.strCategory}
                  </p>
                  <p>
                    <b>Country:</b> {meal.strArea}
                  </p>
                </div>
                <div className="col text-center">
                  <div className="dropdown">
                    <button
                      className={`btn btn-secondary dropdown-toggle ${styles.dropButton}`}
                      type="button"
                      id="dropdownMenuButton"
                    >
                      Category
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`container ${styles.reqContainer}`}>
          <h1 className={`${styles.reqMeal}`}>Your requested meals:</h1>
          {this.state.meals === null
            ? (this.props.history.location.pathname = "*")
            : this.state.meals.map(meal => {
                return (
                  <div className="row" key={meal.idMeal}>
                    <div className="col">
                      <h2 className={`${styles.reqMealTitle}`}>
                        {meal.strMeal}
                      </h2>
                      <img
                        src={meal.strMealThumb}
                        alt="meal"
                        className={`rounded mx-auto d-block ${styles.reqImg}`}
                      />
                      <p className={`${styles.reqCategory}`}>
                        <b>Category:</b> {meal.strCategory}
                      </p>
                      <p className={`${styles.reqArea}`}>
                        <b>Country:</b> {meal.strArea}
                      </p>
                    </div>
                  </div>
                );
              })}
          }
        </div>
      </div>
    );
  }
}

export default Search;
