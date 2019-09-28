import React, { Component } from "react";
import axios from "axios";
import styles from "./MyMeals.module.css";

class MyMeals extends Component {
  state = {
    recipes: [],
    meals: []
  };

  timeout = null;

  componentDidMount() {
    const randomMeal = `https://www.themealdb.com/api/json/v1/1/random.php`;
    axios
      .get(randomMeal)
      .then(res => res.data)
      .then(data => {
        this.setState({
          meals: data.meals
        });
      });
  }

  render() {
    return (
      <div>
        <div className={styles.myMealsContainer}>
          {this.state.meals.map(recipe => {
            return (
              <div key={recipe.idMeal}>
                <div>
                  <h1 className={styles.myMealsCategory}>
                    {recipe.strCategory}
                  </h1>
                  <img
                    className={styles.myMealsImg}
                    src={recipe.strMealThumb}
                    alt="meal"
                  />
                  <h4 className={styles.myMealsMeal}>{recipe.strMeal}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyMeals;
