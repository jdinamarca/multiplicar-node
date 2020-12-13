const argv = require('yargs')
    .command('listar', 'Imprime en consola', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(` ${ archivo } creado`))
            .catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(` ${ archivo } creado`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido');
}