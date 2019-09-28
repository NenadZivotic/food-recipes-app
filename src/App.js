import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import MyMeals from "./components/MyMeals/MyMeals";
import Category from "./components/Category/Category";
import Search from "./components/Search/Search";
import SingleMeal from "./components/SingleMeal/SingleMeal";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/my-meals" exact component={MyMeals} />
          <Route path="/category/:meal" exact component={Category} />
          <Route path="/search" exact component={Search} />
          <Route path="/single-meal/:id" exact component={SingleMeal} />
          <Route path="/" exact component={HomePage} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
