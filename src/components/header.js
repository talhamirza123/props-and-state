import React, { Component } from 'react';

class Header extends Component 
{
    state = {
        
        keywords: 'hello here'
        
    }
    
    inputhandler(event) {
        
        this.setState({
            
            keywords: event.target.value,
            
        })
    }
    
    
    render()
    {
        return (
            <header>
            <div>Logo</div>
            <input type="text" onChange={this.inputhandler.bind(this)}/>
            </header>
            )
    }
}
export default Header;