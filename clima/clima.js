const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=13087d653227d00bf8e454fc4219a060&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}