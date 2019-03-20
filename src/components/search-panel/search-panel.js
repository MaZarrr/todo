import React, {Component} from 'react'

export default class SearchPanel extends Component {
    
    state = {
        res: ''
    }

    onSearch = (e) => {
        const search = e.target.value
        this.setState({
            res: search
        })
        this.props.onSearchChange(search)
    } 
    
    render() {
    return(
        <input 
        placeholder="search" 
        onChange={this.onSearch}
        value={this.state.res}
        >
        </input>
        );
    }
};
  
  