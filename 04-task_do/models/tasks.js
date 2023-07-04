const Task = require('./task');

class Tasks {

    _list = {};

    constructor() {
        this._list = {};
    }

    createTask( desc = '' ) {

        const task = new Task(desc);

        this._list[task.id] = task;
    }

    get listArr() {
        const list = [];

        Object.keys(this._list).forEach( key => {
            
            const task = this._list[key];
            list.push( task );
        });

        return list;
    }

    loadTasksFromArray( tasks = [] ) {

        tasks.forEach(task => {
            this._list[task.id] = task;
        })

    }

    listAll() {

        this.listArr.forEach(( task, i)=>{
            
            const index = `${i + 1}`.green;
            const { desc, completedIn } = task;
            const status = ( completedIn )
                                    ? 'Completed'.green
                                    : 'Pendant'.red

            console.log(`${ index }. ${ desc } :: ${ status }`);
        });

    }

    deleteTask( id = '' ) {
        if( this._list[id] ) {
            delete this._list[id];
        }
    }

    listPendantOrCompleted ( completed = true ){

        
        let i = 0;
        this.listArr.forEach(( task ) => {
            
            const { desc, completedIn } = task;
            const status = ( completedIn )
                                    ? 'Completed'.green
                                    : 'Pendant'.red
            
            if ( completed ) {
                if( completedIn ) {
                    i++;
                    console.log(`${ i.toString().green }. ${ desc } :: ${ completedIn.green }`);
                }
            }else{
                if( !completedIn ) {
                    i++;
                    console.log(`${ i.toString().green }. ${ desc } :: ${ completedIn }`);
                }
            }

        });

        

    }

    toggleComplete( ids = [] ) {
        ids.forEach( id => {
            const task = this._list[id];

            if (!task.completedIn) {
                task.completedIn = new Date().toISOString()
            }

        });

        this.listArr.forEach( task => {
            if(!ids.includes(task.id)){
                this._list[task.id].completedIn = null;
            }
        })
    }
}

module.exports = Tasks;