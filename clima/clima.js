
const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=667a5a1f76e25f539c7d12c55389f987&units=metric`)

    return resp.data.main.temp;
}
module.exports = {
    getClima
}
