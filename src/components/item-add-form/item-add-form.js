import React, {Component} from 'react'

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }
    
    onLabelChange = (e) => { // каждая функция которая используется как eventlistener на вход принимает обьект event
        this.setState({  // тут наш стейн не зависит от предыдущего стейта
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAddItems(this.state.label)
        
        this.setState({
            label: ''
        })
    }

    render() {

    const { label } = this.state

    return (
        <form 
        className="item-add-form d-flex ml-3"
        onSubmit={this.onSubmit}    
        >
            <input 
            type="text" 
            className="form-coontrol mr-1"
            onChange={this.onLabelChange}
            placeholder="What needs to be done"
            value={label}
            /> 
            <button
            className="btn btn-outline-secondary"
            >Add Item</button>
        </form>
        )  
    }
}