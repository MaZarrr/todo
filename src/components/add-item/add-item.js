import React from 'react'
import './add-item.css'

const AddItem = ( {onAddItems} ) => {

// const { addItem } = this.props

return  (
    <div className="add-item">
        <button 
        className="btn btn-outline-success ml-4"
        onClick= { () => onAddItems('Hello world') } 
        >
        Add item </button>
    </div>   

    )
}

export default AddItem