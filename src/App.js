import React, { Component } from 'react';
import './App.sass';
import AppHeader from './components/app-header/app-header'
import SearchPanel from './components/search-panel/search-panel'
import TodoList from './components/todo-list/todo-list'
import ItemStatusFilter from './components/item-status-filter/item-status-filter'
import ItemAddForm from './components/item-add-form/item-add-form'

class App extends Component {  
  
  maxId = 100 // чаще всего id будут генерится сервером

  state = {
    todoData: [
    this.createTodoItem('Drink Vodka'),
    this.createTodoItem('Have Lanch'),
    this.createTodoItem('Drink Coffee')
  ],
    term: '',
    filter: ''
}

createTodoItem(label) {
  return  {
      label,
      important: false,
      done: false,
      id: this.maxId++
      }
  }

onDeleteTodoItem = (id) => { 
  this.setState(({ todoData }) => {
    const idx  = todoData.findIndex( (el) => el.id === id) // типа (el) => el.id === id
    const newToDoArray = [
    ...todoData.slice(0, idx),
    ...todoData.slice(idx + 1)
    ]
    return {
      todoData: newToDoArray
    }
  })
}

addToItem = (text) => {
  //generate id
  const newItem = this.createTodoItem(text)
  // add element in array ?
  this.setState(( {todoData} ) => {
    const addArrItem = [...todoData, newItem]
    console.log(...todoData)
    console.log(newItem)
    console.log(addArrItem)
    return { // возвращаем новое состояние
      todoData: addArrItem
    }
  })
}

toggleProperty(arr, id, propName) {  // propeptyName - это имя property которое нужно изменитиь с true на false наоборот
  const idx = arr.findIndex( (el) => el.id === id )
    console.log(idx);
    
  // 1 update object
  const oldItem = arr[idx] // наш item с инедксом [idx]
  const newItem = { ...oldItem, [propName]: !oldItem[propName] } // newItem это все то же самое что и oldItem кроме done
  console.log(oldItem);
  console.log({[propName]: !oldItem[propName]})
  console.log({...oldItem})
  console.log({...oldItem, [propName]: !oldItem[propName]})


  // construct new array
  // когда нам нужно обновить обьект который явл частью массива
 return [
    ...arr.slice(0, idx), // без newItem элемеент удалится из массива
      newItem, // вместо удаленного обьета подсиавим новый обьект, точно такой же как старый только с измененным знач done
    ...arr.slice(idx + 1)
    ]
} 

onToggleImportant = (id) => {
  this.setState( ( {todoData} ) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
    }
  })
}

onToggleDone = (id) => {
  this.setState( ( {todoData} ) => {
    return {
      todoData: this.toggleProperty(todoData, id, 'done')
    }
  })
}

searchChange( items, term ) {  
    if(term.length === 0) { // пустая строка
      return items
  }

  return items.filter((item) => {
    //возвращаем true если item label содержит строку term // indexOf вернет 0 или больше если строка содержится и -1 если строки нет
  return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
  
  })
}

onSearchChange = (text) => {
  this.setState({
    term: text
  })
}
 
  filter(items, filter) { // принимает массив и текущий фильте
    switch(filter) {
      case 'all':
        return items
      case 'active':
        return items.filter( (item) => !item.done )
      case 'done':
        return items.filter( (item) => item.done )
      default:
        return items
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  render() {

    const { todoData, term, filter } = this.state
    
    const visibleItems = this.filter(this.searchChange(todoData, term), filter) 
    

    const doneCount = todoData.filter(({ done }) => done).length // вернут новый массив с done true тоесть выполненными задачами 
    const todoCount = todoData.length - doneCount // сколько всего задач вычитаем сколько еще не выполнено получаем сколько еще надо выполнить


    return (
      <div>
        <AppHeader toDo = {doneCount} done = {todoCount} />
        <SearchPanel 
        onSearchChange ={this.onSearchChange}
        />
        <ItemStatusFilter 
        filter = {filter}
        onFilter={this.onFilterChange}
        />
        <TodoList 
        todos={visibleItems}
        onDeleted={ this.onDeleteTodoItem } 
        onToggleImportant={this.onToggleImportant}
        onToggleDone ={this.onToggleDone}
        />
        <ItemAddForm 
        onAddItems ={ this.addToItem } 
        />
      
      </div>
    );
  }
}

export default App;













// toggleProperty(arr, id, propName) {  // propeptyName - это имя property которое нужно изменитиь с true на false наоборот
//   const idx = arr.findIndex( (el) => el.id === id )
    
//   // 1 update object
//   const oldItem = arr[idx] // наш item с инедксом [idx]
//   const newItem = { ...oldItem, [propName]: !oldItem[propName] } // newItem это все то же самое что и oldItem кроме done

//   // construct new array
//   // когда нам нужно обновить обьект который явл частью массива
//   const newToDoArray = [
//     ...arr.slice(0, idx), // без newItem элемеент удалится из массива
//       newItem, // вместо удаленного обьета подсиавим новый обьект, точно такой же как старый только с измененным знач done
//     ...arr.slice(idx + 1)
//     ]
//     return {
//       arr: newToDoArray
//   }
// } 