import React, {useState} from "react";
import SearchMealItem from "./search-meal-item";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {searchMeal} from "../../redux/meals-reducer";
import { Field, reduxForm, reset } from "redux-form";

import "./search.scss";

const SearchMeal = () => {

    const {searchResult} = useSelector(state => state.cocktailList);
    console.log(searchResult);

    return (
        <>
            <div className="search-title">
                <h1>Search Meal</h1>
                <Link to="/search"> &#8592; back</Link>
            </div>
            <SearchMealReduxForm/>
            <div className="search-result">
                {searchResult.map(item => <SearchMealItem item={item} key={item.idMeal} />)}
            </div>
        </>
    )
}

const SearchMealForm = () => {

    const [search, setSearch] = useState("");
    
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (search) {
          dispatch(searchMeal(search));
    
          dispatch(reset("searchMealForm"))
        }
    }

    return (
        <form className="search-form" onSubmit={handleOnSubmit}>
            <Field component="input"
                name="searchMeal" 
                placeholder="search here..." 
                className="search-box"
                validate={[]} 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Field component="label"
                name="labelSearch" 
                for="searchMeal" 
                className="fas fa-search"
                validate={[]} 
            />
        </form>
    )
}

const SearchMealReduxForm = reduxForm({form: "searchMealForm"})(SearchMealForm);

export default SearchMeal;