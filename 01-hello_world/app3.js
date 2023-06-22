

console.log('program start');


setTimeout( () => {

    console.log('Firts Timeout');

}, 3000 );


setTimeout( () => {

    console.log('Second Timeout');

}, 0 );


setTimeout( () => {

    console.log('Third Timeout');

}, 0 );

console.log('program end');
