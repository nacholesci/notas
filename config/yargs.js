const descripcion = {
    alias: 'd',
    describe: 'Descripcion del elemento',
    demand: true,
    type: 'string'
};

const completado = {
    alias: 'c',
    describe: 'Estado de la tarea',
    demand: true,
    type: 'boolean',
    default: true
};


const argv = require("yargs")
                .command('crear', 'Crear un elemento por hacer', {
                    descripcion
                })
                .command('actualizar', 'Actualiza el estado completado de una tarea', {
                    descripcion,
                    completado
                })
                .command('borrar', 'Borrar un elemento por hacer', {
                    descripcion
                })
                .help()
                .argv;

module.exports = {
    argv
}                