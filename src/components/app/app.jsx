import React, {useEffect, useState} from "react";
import { Route, Switch, withRouter } from "react-router";
import Header from "../header/header";
import Search from "../search/search";
import Home from "../home/home";
import Cart from "../cart/cart";
import Footer from "../footer/footer";
import CocktailDetails from "../cocktails/cocktail/cocktail-details";
import MealDetails from "../meals/meal/meal-details";
import Favorite from "../favorite/favorite";
import SearchMeal from "../search/search-meal";
import SearchCocktail from "../search/search-cocktail";
import Products from "../products/products";
import {useDispatch, useSelector} from "react-redux";
import { getMeals } from "../../redux/meals-reducer";
import {getCocktails} from "../../redux/cocktails-reducer";
import Loader from "../loader/loader";


import './app.scss';


const App = () => {

  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [isLoading, setLoading] = useState(false);

  const {ingredients} = useSelector(state => state.ingList);
  console.log(ingredients);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    dispatch(getMeals());
    dispatch(getCocktails());
  }, []);


  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;

    const savedMode = JSON.parse(localStorage.getItem("dark"));

    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <>
      {!isLoading
        ? <div className="app">
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <div className={darkMode ? "dark-mode" : "light-mode"}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/cocktail/:cocktailId" render={() => <CocktailDetails/>}/>
                <Route exact path="/meal/:mealId" render={() => <MealDetails/>}/>
                <Route exact path="/favorite" component={Favorite}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/search-meal" component={SearchMeal}/>
                <Route exact path="/search-cocktail" component={SearchCocktail}/>
                <Route exact path="/products" render={() => <Products ingredients={ingredients}/>}/>
            </Switch>
            <Footer/>
            </div>
          </div>
        : <Loader/>
      }
    </>
  );
}

export default withRouter(App);
