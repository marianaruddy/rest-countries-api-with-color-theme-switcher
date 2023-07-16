import axios from "axios";

const baseURL = 'https://restcountries.com';

export const fetchAllCountries = () => {
    return axios.get(`${baseURL}/v3.1/all`)
};