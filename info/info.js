const lugar = require('../lugar/lugar');
const clima = require('../clima/clima');

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.rLat, coords.rLng);

        return `El clima de ${direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion} (${e})`;
    }
}

module.exports = {
    getInfo
}