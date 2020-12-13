const fs = require('fs');

let data = '';

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        for (let i = 1; i <= 10; i++) {
            data += ` ${ base } * ${ i } = ${ base * i}\n`;
            //console.log(base + ' * ' + i + ' = ' + base * i);
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });

    });



}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        })


    })

}



module.exports = {
    crearArchivo,
    listarTabla
}