import React, { Component } from 'react'
import {Animated} from 'react-animated-css'

import TestFruit from './Test-Fruit'

//import Css
import './Test-Review.css'

class TestReview extends Component {
    render() {
        return (
            <Animated animationIn={this.props.isLeft ? "fadeInDown" : "fadeInUp"} animationOut={this.props.isLeft ? "fadeOutDown" : "fadeOutUp"} isVisible={this.props.isVisible}> 
                <div className='content'>
                {
                    this.props.topicId == 1 ?
                    <TestFruit cardId={this.props.index} />
                    :
                    <div></div>
                }                    
                </div>                                  
            </Animated>
        )        
    }
}

export default TestReview;