import React, {useState} from "react";
import SearchCocktailItem from "./search-cocktail-item";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {searchCocktail} from "../../redux/cocktails-reducer";
import { Field, reduxForm, reset } from "redux-form";
import {createNewField, Input} from "../form-controls/form-controls";
import {required} from "../validators/validators";

import "./search.scss";

const SearchCocktail = () => {

    const {searchResult} = useSelector(state => state.cocktailList);
    console.log(searchResult);


    return (
        <>
            <div className="search-title">
                <h1>Search Cocktail</h1>
                <Link to="/search"> &#8592; back</Link>
            </div>
            <SearchCocktailReduxForm/>
            <div className="search-result">
                {searchResult.map(item => <SearchCocktailItem item={item} key={item.idDrink}/>)}
            </div>
        </>
    )
}

const SearchCocktailForm = ({error}) => {

    const [search, setSearch] = useState("");
    
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (search) {
          dispatch(searchCocktail(search));
    
          dispatch(reset("searchCocktailForm"))
        }
    }

    return (
        <form className="search-form" onSubmit={handleOnSubmit}>
            {/* {createNewField(Input, "searchCocktail", [required], "search here...", {value: search, onChange: (e) => setSearch(e.target.value)})} */}
            <Field component="input"
                name="searchCocktail" 
                placeholder="search here..." 
                className="search-box"
                validate={[]} 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Field component="label"
                name="labelSearch" 
                for="searchCocktail" 
                className="fas fa-search"
                validate={[]} 
            />

            {
                error
            }
        </form>
    )
}

const SearchCocktailReduxForm = reduxForm({form: "searchCocktailForm"})(SearchCocktailForm);

export default SearchCocktail;