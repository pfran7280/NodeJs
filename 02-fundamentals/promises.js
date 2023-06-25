const employees = [
    {
        id: 1,
        employeeName: 'Fran'
    },

    {
        id: 2,
        employeeName: 'Mario'
    },

    {
        id: 3,
        employeeName: 'Susana'
    },
];


const wages = [
    {
        id: 1,
        salary: 2000
    },

    {
        id: 2,
        salary: 1500
    },

];

// const getEmployee = ( id, callback ) => {

    

//     const promise = new Promise( (resolve, reject) => {

//         const employee = employees.find((e) => e.id === id)?.employeeName;

//         if ( employee ) {

//             resolve ( employee );

//         } else {
//             reject( `not exist employee with the id ${id}`);
//         }

//     });

//     return promise;
// }

const getEmployee = ( id ) => {

    return new Promise( (resolve, reject) => {

        const employee = employees.find((e) => e.id === id)?.employeeName;
         ( employee ) 
            ? resolve ( employee )
            : reject( `not exist employee with the id ${id}`);
    });

}

const getSalary = ( id ) => {

    

    return new Promise( (resolve, reject) => {

        const salary = wages.find((s) => s.id === id)?.salary;
         ( salary ) 
            ? resolve ( salary )
            : reject( `not exist salary with the id ${id}`);
    });

}

const id = 3;
// getEmployee(id)
//     .then( employee => console.log( employee ))
//     .catch( err => console.log( err ));

// getSalary(id)
//     .then( salary => console.log( salary ))
//     .catch( err => console.log( err ));

let nameEmployee;

getEmployee( id )
    .then (employee => {
        nameEmployee = employee;
        return getSalary( id );
    })
    .then (salary => console.log( 'The employee: ', nameEmployee, ' has a salary of ', salary ))
    .catch( err => console.log( err ));

