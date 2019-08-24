import axios from "axios";

function getAllCountries() {
    return axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => response.data);
}

export default {
    getAllCountries,
};