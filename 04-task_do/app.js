const { inquirerMenu,pause,readInput,deleteListTask,confirm,showListTask } = require('./helpers/inquirer');
const { saveDB,readDB } = require('./helpers/save_file');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

require('colors');

const main = async () => {
    
    let opt = '';
    const tasks = new Tasks();
    const taksDB = readDB();

    if(taksDB){
        tasks.loadTasksFromArray(taksDB)
    }


    do {
        
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Description: ');
                tasks.createTask( desc );
                break;
            
            case '2':
                tasks.listAll()
                break;
            case '3':
                tasks.listPendantOrCompleted(true)
                break;
            case '4':
                tasks.listPendantOrCompleted(false)
                break;
            case '5':
                const ids = await showListTask(tasks.listArr);
                tasks.toggleComplete(ids);
                break;
            case '6':
                const id = await deleteListTask( tasks.listArr );
                if( id !== '0'){
                    const ok = await confirm('Are you sure? ')
                    if(ok){
                        tasks.deleteTask(id);
                        console.log('task deleted');
                    } 
                }
                
                break;
        
            default:
                break;
        }

        saveDB( tasks.listArr );

        await pause();

    } while ( opt !== '0' );

    // pause();

}

main();