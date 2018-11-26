import React, { Component } from 'react';
import './CardItem.css'
class CardItem extends Component {
    render() {
        return (
            <div className='card-items-container'>
                <div class='card-img'>
                    <img class="img-fluid img-custom" alt="Responsive image" src={this.props.image}></img>
                </div>
                <div class='card-title'>
                    <h4>{this.props.title}</h4>
                </div>
            </div>
        )        
    }
}

export default CardItem;