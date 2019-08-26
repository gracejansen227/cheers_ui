// Here I want to expose an endpoint that will take an input of a city and return a list of bars

// For Milestone 4, I will use the /establishments endpoint to get a list of restaurant types in a city 

// zomato dallas id = 276

import { axios } from 'axios';

// axios.defaults.baseURL = 'https://developers.zomato.com/api/v2.1/';
const userKey = `d2838aff8345fac53296697d57240bdf`;

export async getEstablishments(){
    axios.create({
        // method: 'get',
        baseURL: 'https://developers.zomato.com/api/v2.1/establishments?city_id=276',
        headers: { Accept: 'application/json', 'user-key': userKey },
        // params: {
        //     city_id: 276
        // }
        }).then( response => {
        console.log('response', response);
    });
}
