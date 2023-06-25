



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

const getEmployee = ( id, callback ) => {
    const employee = employees.find((e) => e.id === id);

    if (employee) {
        callback( null, employee.employeeName );
    }else{
        callback( `Employee with id ${ id } not exist` )
    }

    
}

const getSalary = ( id, callback ) => {
    
    const salary = wages.find( (e) => e.id === id )?.salary;

    if ( salary ) {
        callback( null, salary );
    }else{
        callback( `Salary with id ${id} not exist` );
    }
}

const id = 3;

getEmployee(id, ( err, employee ) => {

    if( err ) {
        console.log( 'ERROR' )
        return console.log( err );
    }

    getSalary( id, ( err, salary ) => {

        if( err ) {
            return console.log( err )
        }
        
        console.log( 'The employee: ', employee, ' has a salary of: ', salary)
    
    });
    
});



