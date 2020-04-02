const argv = require('./config/yargs').argv;
const colors = require('colors');
const { listarTabla } = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.inverse}`.green))
            .catch(e => console.log(e.inverse));
        break;

    default:
        console.log('Comando no reconocido'.red);
}

let limite = argv.limite; //revisar

module.exports = {
        limite
    }
    // let parametro = argv[2];
    // let base = parametro.split('=')[1]