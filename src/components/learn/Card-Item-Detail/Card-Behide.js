import React, { Component } from 'react'
import {Animated} from 'react-animated-css'

//import components
import ContentFruitBehide from './Content-Fruit-Behide'
import ContentAnimalBehide from './Content-Animal-Behide'
import ContentVehicleBehide from './Content-Vehicle-Behide'

//import image
import pen from '../image/pen.png'
import kid from '../image/kid.png'

class CardBehide extends Component {
    render() {
        return (
            <Animated animationIn={this.props.isLeft ? "fadeInDown" : "fadeInUp"} animationOut={this.props.isLeft ? "fadeOutDown" : "fadeOutUp"} isVisible={this.props.isVisible}> 
                <div className='content-behide'>
                    <div>
                        <img src={pen} class='pen-img'></img>
                    </div>  
                    <div>
                        <img src={kid} class='kid-img'></img>
                    </div>
                    {
                        this.props.topicId == 1 ?
                            <ContentFruitBehide cardId={this.props.index} />
                        : this.props.topicId == 2 ?
                            <ContentAnimalBehide cardId={this.props.index} />
                        : this.props.topicId == 3 ? 
                            <ContentVehicleBehide cardId={this.props.index} />
                        :
                            <div></div>
                    }
                </div>                                  
            </Animated>
        )
    }
}

export default CardBehide;