const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const info = require('./info/info');

const rInfo = info.getInfo(argv.direccion).then(console.log);