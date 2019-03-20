import React, { Component } from 'react'

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]

render() {

    const {filter, onFilter} = this.props

const buttons = this.buttons.map( ({name, label} ) => {  
        const isActive = filter === name
        const cls = isActive ? 'btn-primary' : 'btn-outline-secondary' 
return(
     <button
        key={name}
        type="button" 
        className={`btn ${cls}`}
        onClick={ () => onFilter(name)}
        >{label}
     </button>
      )  
    })

    return(
        <div className="btn-group">
        {buttons}
        </div>
        );
    };
}