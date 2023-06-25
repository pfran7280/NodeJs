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

const getInfoUser = async ( id ) => {

    try{

        const employee = await getEmployee(id);
        const salary = await getSalary(id);

        return `The salary of the employee ${employee} is ${salary}`;
    } catch ( err ) {
        throw err;
    }

    
}

getInfoUser(id)
    .then( msg => {
        console.log('Ok')
        console.log( msg )
    })
    .catch( err => {
        console.log('Bad')
        console.log( err )
    });