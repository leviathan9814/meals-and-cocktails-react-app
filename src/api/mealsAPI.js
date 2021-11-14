import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://themealdb.p.rapidapi.com/",
    headers: {
        'x-rapidapi-host': 'themealdb.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
    }
});

export const MealsAPI = {

    getMeals () {
        return instance.get(`latest.php`,)
            .then(response =>  {
                return response.data;
            })
    },

    getMealDetails(itemId) {
        return instance.get(`lookup.php`, {params: {i: `${itemId}`}})
            .then(response =>  {
                return response.data;
            })
    },

    searchMeal(searchTerm) {
        return instance.get(`search.php`, {params: {s: `${searchTerm}`}})
            .then(response =>  {
                return response.data;
            })
    },

    getIngredients() {
        return instance.get(`list.php`, {params: {i: `list`}})
            .then(response =>  {
                return response.data;
            })
    },
}