const axios = require("axios");

const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {
            "x-rapidapi-key": "0e6949ea6dmsh65c4f755068ea34p145d74jsn014238b4bdcd"
        }
    })

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    } else {

        const rData = resp.data.Results[0];
        const rName = rData.name;
        const rLat = rData.lat;
        const rLng = rData.lon;

        return {
            rName,
            rLat,
            rLng
        }
    }
}

module.exports = {
    getLugarLatLng
}