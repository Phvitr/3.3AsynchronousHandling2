const axios = require('axios');
let API_KEY = 'zMCbsLa2a0AqrxbHLde9Tn086vrWkmDn0nLmvwhj';

function getApod() {
    return axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
            api_key: API_KEY
        }
    });
}
getApod()
    .then(response => {
        console.log(response.data)
    })
    .catch(err => {
    console.log(err)
});