import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://the-cocktail-db.p.rapidapi.com/",
    headers: {
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
    }
});

export const CocktailsAPI = {

    getCocktails () {
       try {
        return instance.get(`popular.php`)
        .then(response =>  {
            return response.data;
        })
       } catch(error) {
           console.log(error);
       }
    },

    getCocktailDetails(itemId) {
        return instance.get(`lookup.php`, {params: {i: `${itemId}`}})
        .then(response =>  {
            return response.data;
        })
    },

    searchCocktail(searchTerm) {
        return instance.get(`filter.php`, {params: {i: `${searchTerm}`}})
            .then(response =>  {
                return response.data;
            })
    }


}