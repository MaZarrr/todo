import React from 'react'
import './todo-list-item.css'

const TodoListItem = ({label, onToggleImportant, 
    onToggleDone, done, important, onDeleted
    }) => {

    let className = 'todo-list-item'
    
    if(done) {
        className += ' done'
    }
    
    if (important) {
        className += ' important'
    }
    
    return(
        <span className={className}>
        <span 
        className="todo-list-item" 
        onClick = { onToggleDone }
        >
        {label}>
        </span>

        <button 
        type="button" 
        className="btn btn-outline-success btn-sm float"
        onClick = {onToggleImportant} 
        >
        <i className="fa fa-exclamation"></i>
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm float"
        onClick = {onDeleted}
        >
        <i className="fa fa-trash-o"></i>
        </button>
    </span>
    
    );
    
}

export default TodoListItem


// const style = {
    //     color: important ? 'tomato' : 'black',
    //     fontWeight: important ? 'bold': 'normal'
    // };

// // деструктурируем important и сразу присваиваем значение по умолчанию important = false
// // сразу достаем значение из обьекта который передается в качестве аргумента функции ({label})
// const TodoListItem = ({label, important = false}) => {  // используем деструктуризацию без нее props.label

//     const style = {
    //         color: important ? 'tomato' : 'black'
    //     };
    
    //     return(
        //         <span className="todo-list-item" style={style}>{label}>
        
        //         <button type="button" className="btn btn-outline-success btn-sm">
        //         <i className="fa fa-exclamation"></i>
        //         </button>
        
        //     <button type="button" className="btn btn-outline-danger btn-sm">
        //     <i className="fa fa-trash-o"></i>
        //     </button>
        //     </span>
        //     );
        // };
        
        
        
        
        // constructor() {
        //     super();
        
        //     this.onLabelClick = () => {
        //         console.log(`done ${this.props.label}`)
        //     };
        // }




















//         import React, { Component } from 'react'
// import './todo-list-item.css'

// export default class TodoListItem extends Component {

//     state = {
//         done: false,
//         important: false
//     }
    
//     onLabelClick = () => {
//         this.setState(({done}) => {
//             return {
//             done: !done
//         }
//     })
// };

// onMarkImportant = () => {
//     this.setState((state) => { // вычисляю новый стейт в зависимости от текущего состояния
//         return {
//             important: !state.important
//         }
//     });
// }

// render() {
    
//     const {label, onDeleted,
//     onToggleImportant, onToggleDone
//     } = this.props;
//     const { done, important } = this.state
    
//     let className = 'todo-list-item'
    
//     if(done) {
//         className += ' done'
//     }
    
//     if (important) {
//         className += ' important'
//     }
    
//     return(
//         <span className={className}>
//         <span 
//         className="todo-list-item" 
//         onClick = { this.onLabelClick }
//         >
//         {label}>
//         </span>

//         <button 
//         type="button" 
//         className="btn btn-outline-success btn-sm float"
//         onClick = {onToggleImportant} //{this.onMarkImportant}
//         >
//         <i className="fa fa-exclamation"></i>
//         </button>

//         <button type="button" className="btn btn-outline-danger btn-sm float"
//         onClick = {onToggleDone}  //{onDeleted}
//         >
//         <i className="fa fa-trash-o"></i>
//         </button>
//     </span>
    
//     );
    
//     }
// }

// -----------------------------------------------------------------------------------------------------------------------

// const style = {
    //     color: important ? 'tomato' : 'black',
    //     fontWeight: important ? 'bold': 'normal'
    // };

// // деструктурируем important и сразу присваиваем значение по умолчанию important = false
// // сразу достаем значение из обьекта который передается в качестве аргумента функции ({label})
// const TodoListItem = ({label, important = false}) => {  // используем деструктуризацию без нее props.label

//     const style = {
    //         color: important ? 'tomato' : 'black'
    //     };
    
    //     return(
        //         <span className="todo-list-item" style={style}>{label}>
        
        //         <button type="button" className="btn btn-outline-success btn-sm">
        //         <i className="fa fa-exclamation"></i>
        //         </button>
        
        //     <button type="button" className="btn btn-outline-danger btn-sm">
        //     <i className="fa fa-trash-o"></i>
        //     </button>
        //     </span>
        //     );
        // };
        
        
        
        
        // constructor() {
        //     super();
        
        //     this.onLabelClick = () => {
        //         console.log(`done ${this.props.label}`)
        //     };
        // }