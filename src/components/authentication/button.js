import React, { Component } from 'react';
import './button.css'
class Button extends Component {
    render() {
        return (
            <div className='button-container' onClick={()=>this.props.onClick()}>
                {this.props.text}
            </div>
        );
    }
}

export default Button;