const axios = require('axios');

async function getApod() {
    let api = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return api.data;
}
getApod()
    .then(result => console.log(result));
