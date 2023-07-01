const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
            })
            .option('h',{
                alias: 'until',
                type: 'number',
                demandOption: true,
            })
            .option('l',{
                alias: 'list',
                type: 'boolean',
                demandOption: false,
                
            })
            .check(( argv, options ) => {
                if( isNaN( argv.base ) ) {
                    throw 'The base have that be a number';
                }
                return true
            })
            .argv;

module.exports = argv;