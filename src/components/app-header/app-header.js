import React from 'react'

const AppHeader = ( {toDo, done} ) => {
    return (
        <div>
            <h1> My TODO  List</h1>
            <p>Выполнено задач {toDo} из {done}</p>
        </div>
    )  
};
export default AppHeader