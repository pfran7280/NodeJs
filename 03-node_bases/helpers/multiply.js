

// const createFile = ( base = 5 ) => {
    // let exit   = ''; 

    // for (let i = 1; i <= 10; i++) {
        
    //     exit += `${ base } x ${ i } = ${ base * i } \n`;
        
    // }



//     console.log( exit );

    // fyleSystem.writeFile( `table-${ base }.txt`, exit, ( err ) => {
    //     if ( err ) throw err;

    //     console.log( `table-${ base }.txt` );

    // })
// }

const fs = require( 'fs' )

// const createFile = ( base = 5 ) => {

//     return new Promise( (resolve, reject) => {

//         let exit   = ''; 

//         for (let i = 1; i <= 10; i++) {
            
//             exit += `${ base } x ${ i } = ${ base * i } \n`;
            
//         }
        

//         resolve( fs.writeFileSync( `table-${ base }.txt`,exit))
        
        
//     });

// }

const createFile = async ( base = 5,list = false, until = 10) => {

        try {

            let exit   = ''; 

            for (let i = 1; i <= until; i++) {
                
                exit += `${ base } x ${ i } = ${ base * i } \n`;
                
            }
            
            if(list){
                console.log(exit);
            }

            fs.writeFileSync( `./03-node_bases/output/table-${ base }.txt`,exit);
            
            return `table-${ base }.txt`;
        } catch (error) {
            throw error;
        }
        

}


module.exports = {
    createFile,
}
