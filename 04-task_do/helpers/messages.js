// const { resolve } = require('path');

// require('colors');

// const showMenu = () => {

//     return new Promise( resolve => {


    
//         console.log(`${'1.'.green} Create task`);
//         console.log(`${'2.'.green} List task`);
//         console.log(`${'3.'.green} List completed task`);
//         console.log(`${'4.'.green} List pending tasks`);
//         console.log(`${'5.'.green} Complete task`);
//         console.log(`${'6.'.green} Delete task`);
//         console.log(`${'0.'.green} Exit`);
    
//         const readline = require('readline').createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
    
//         readline.question('Select one option: ', (opt) => {
//             readline.close();
//             resolve(opt);
//         });


//     });


    
// }

// // const pause = () => {

// //     return new Promise( resolve => {

// //         const readline = require('readline').createInterface({
// //             input: process.stdin,
// //             output: process.stdout
// //         });
    
// //         // readline.question(`Press ${'\nENTER'.green} to continue\n`, (opt) => {
// //         //     readline.close();
// //         //     resolve();
// //         // });
// //     });


// // }

// module.exports = {
//     showMenu,
//     pause
// }