import React from 'react'
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'
// значение по умолчанию у important true
const TodoList = ({ todos, onDeleted,
onToggleImportant, onToggleDone
}) => {
    
const elements = todos.map(({id, ...item}) => {
    // <li key={item.id}>  какие именно элементы изменились в DOM дереве и обновить эти частим страницы, он сравнивает данные  recansilation алгоритм
    // или const {id, ...item} = item
    return (
    <li key={id} 
        className="list-group-item"> 
    <TodoListItem 
        // label={item.label} 
        // important={item.important}
        // заменить на spred операвтор 
        {...item} // взять каждое св-во из обьекта item и передать его в качестве атрибута вместе со значением в todolistitem
        onDeleted = {() => onDeleted(id)} // появилось новое св-во onDeleted
        onToggleImportant= {() => onToggleImportant(id) }
        onToggleDone={() => onToggleDone(id) }  
        />
    </li>
    );
});

    return(
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};
export default TodoList