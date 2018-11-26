import React, { Component } from 'react'
import { Animated } from 'react-animated-css'

//import components
import ContentFruit from './Content-Fruit'
import ContentAnimal from './Content-Animal'
import ContentVehicle from './Content-Vehicle'

class CardAbove extends Component {
    render() {
        return (
            <Animated animationIn={this.props.isLeft ? "fadeInDown" : "fadeInUp"} animationOut={this.props.isLeft ? "fadeOutDown" : "fadeOutUp"} isVisible={this.props.isVisible}> 
                <div className='content'>
                    {
                        this.props.topicId == 1 ?
                            <ContentFruit cardId={this.props.index} />
                        : this.props.topicId == 2 ?
                            <ContentAnimal cardId={this.props.index}/>
                        : this.props.topicId == 3 ? 
                            <ContentVehicle cardId={this.props.index} />
                        :
                            <div></div>
                    }
                </div>                                  
            </Animated>
        )
    }
}

export default CardAbove;