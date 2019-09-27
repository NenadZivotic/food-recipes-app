import React from "react";
import styles from "./SingleItem.module.css";

const SingleItem = props => {
  return (
    <div style={{ marginRight: "50px" }}>
      <b className="col-xl-4">
        <img
          style={{ width: "300px" }}
          src={props.strMealThumb}
          alt="similar"
          className="rounded mx-auto d-block"
        />
        <p className={styles.singleItemTitle}>{props.strMeal}</p>
        <p>
          <b>Category</b>: {props.strCategory}
        </p>
        <p>
          <b>Country:</b> {props.strArea}
        </p>
      </b>
    </div>
  );
};

export default SingleItem;
