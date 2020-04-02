const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla', opt)
    .command('crear', 'Crea el archivo txt de la tabla', opt)
    .help()
    .argv;



module.exports = {
    argv
}