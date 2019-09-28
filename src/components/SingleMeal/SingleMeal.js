import React, { Component } from "react";
import axios from "axios";
import styles from "./SingleMeal.module.css";
import SingleItem from "./SingleItem/SingleItem";

class SingleMeal extends Component {
  state = {
    random: [],
    id: this.props.match.params.id,
    similar: []
  };
  componentDidMount() {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.state.id}`
      )
      .then(res => res.data)
      .then(data => {
        this.setState({
          random: data.meals
        });
      });

    Promise.all([
      fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(value =>
        value.json()
      ),
      fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(value =>
        value.json()
      ),
      fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(value =>
        value.json()
      )
    ])
      .then(value => {
        this.setState({
          similar: value
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="container my-5">
          <div className={`row ${styles.SingleMealContainer}`}>
            {this.state.random.map(recipe => {
              return (
                <div className="row" key={recipe.idMeal}>
                  <div className="col-md-4">
                    <h1>{recipe.strMeal}</h1>

                    <img
                      src={recipe.strMealThumb}
                      alt="mealImg"
                      className={`rounded mx-auto d-block ${styles.SingleMealImg}`}
                    />
                  </div>
                  <div className="col">
                    <h5 className="single-hash">
                      <b>
                        # {recipe.strIngredient1} # {recipe.strIngredient5}
                      </b>
                    </h5>
                    <p>
                      <b>Category:</b> {recipe.strCategory}
                    </p>
                    <p>
                      <b>Country:</b> {recipe.strArea}
                    </p>
                    <p>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`${recipe.strYoutube}`}
                      >
                        {recipe.strYoutube}
                      </a>
                    </p>
                    <p>{recipe.strInstructions}</p>
                  </div>

                  <div className={`row ${styles.ingredientsOuter}`}>
                    <div
                      className={`col-md-4 ${styles.ingredients}`}
                    >
                      <h6>Ingredients:</h6>
                      <ol>
                        <li>{recipe.strIngredient1}</li>
                        <li>{recipe.strIngredient2}</li>
                        <li>{recipe.strIngredient3}</li>
                        <li>{recipe.strIngredient4}</li>
                      </ol>
                    </div>
                    <div
                      className={`col-md-4 ${styles.measures}`}
                    >
                      <h6>Measure:</h6>
                      <ol>
                        <li>{recipe.strMeasure1}</li>
                        <li>{recipe.strMeasure2}</li>
                        <li>{recipe.strMeasure3}</li>
                        <li>{recipe.strMeasure4}</li>
                      </ol>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{ marginTop: "100px", backgroundColor: "rgb(230,230,230)" }}
            className="row d-flex justify-content-center"
          >
            <h1 style={{ width: "100%", textAlign: "center" }}>
              Similar meals
            </h1>

            {this.state.similar.map((recipe, index) => {
              return (
                <div className="row" key={index}>
                  <SingleItem
                    strMeal={recipe.meals[0].strMeal}
                    strArea={recipe.meals[0].strArea}
                    strMealThumb={recipe.meals[0].strMealThumb}
                    strCategory={recipe.meals[0].strCategory}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleMeal;
