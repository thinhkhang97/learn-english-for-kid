import React, { Component } from 'react';
import './input.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faLock, faUser);

class Input extends Component {
    render() {
        return (
            <div className='input-container'>
                <div className='icon'>
                    <FontAwesomeIcon icon={this.props.iconName}/>
                </div>
                <div className='input'>
                    <input 
                    value={this.props.value} 
                    onChange={(e)=>this.props.onChange(e)} 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    required/>
                </div>
            </div>
        );
    }
}

export default Input;