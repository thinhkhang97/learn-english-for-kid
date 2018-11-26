import React, {Component} from 'react'
import {Animated} from 'react-animated-css'

import logo from '../image/logo.png'

class Introduction extends Component {
    render() {
        return (
            <Animated animationIn="bounce" animationOut="fadeOutDown" isVisible={true}>
                             <img src={logo}/>
                        </Animated>
        )
    }
}

export default Introduction;