//requires
const fs = require('fs');
const colors = require('colors');
const limite = require('../app')

let listarTabla = (base, limite) => {
    console.log('=========================='.yellow);
    console.log(`======= tabla de ${base} =======`.yellow);
    console.log('=========================='.yellow);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (base === 0) {
            reject(`Como vas a multiplicar por ${base}? pelotudo, si siempre da 0`.red)
            return;
        } else if (!Number(base)) {
            reject(`${base} No es un numero`.red)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
            console.log(`Se guardo el archivo! es una tabla del ${base}`.green);
        });

    });
}
module.exports = {
    crearArchivo,
    listarTabla
}