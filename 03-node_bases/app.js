const { createFile } = require( './helpers/multiply' );

const colors = require('colors');
const argv = require('./config/yargs');

console.clear();



// const [ , , arg3 = 'base=5'] = process.argv;

// const [ , base = 5 ] = arg3.split( '=' )


// console.log(process.argv);
console.log(argv);

// console.log( 'base: yargs', argv.base );

// const base = 5;

createFile( argv.b,argv.l, argv.h )
    .then( () => console.log( `table-${ argv.b }.txt created`.rainbow ))
    .catch( err => console.log( err ));