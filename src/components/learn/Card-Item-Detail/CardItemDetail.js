import React, { Component } from 'react'
import { Animated } from 'react-animated-css'

//import css
import './CardItemDetail.css'


// import components
import SideBarNumber from './SideBarNumber'
import ContentFruit from './Content-Fruit'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardAbove from './Card-Above'
import CardBehide from './Card-Behide'

library.add(faEnvelope, faKey, faCaretLeft, faCaretRight);

class CardItemDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.cardId,
            topicId: this.props.topicId,
            isVisible: true,
            isLeft: true,
            isAbove: true
        }
    }

    onClickLeft = () => {
        this.setState({ isLeft: true });
        setTimeout(() => {            
            this.setState({isVisible: false})
            setTimeout(() => {
                this.setState({ index: this.state.index > 1 ? this.state.index - 1 : 9 })        
                this.setState({isVisible: true})        
            }, 500) 
        }, 100)               
    }

    onClickRight = () => {
        this.setState({ isLeft: false });
        setTimeout(() => {            
            this.setState({isVisible: false})
            setTimeout(() => {
                this.setState({ index: this.state.index < 9 ? this.state.index + 1 : 1 })
                this.setState({isVisible: true})        
            }, 500)
        }, 100)                  
    }

    onClickChangeFace = () => {
        this.setState({ isAbove: !this.state.isAbove })       
    }

    render() {
        return (
            <div>                
                <div class="container">
                    <SideBarNumber index = {this.state.index}/>
                    <div class='row mt-3 mb-3 card-above'>
                        <div class='arrow-left col-3'>
                            <span class='left-title' onClick={this.onClickLeft}>
                                <FontAwesomeIcon color='green' icon="caret-left" size="8x"/>
                            </span>
                        </div>                                                     
                        <div className='col-6' onClick={this.onClickChangeFace}> 
                            {
                                this.state.isAbove ? 
                                    <CardAbove  isVisible={this.state.isVisible} 
                                                isLeft = {this.state.isLeft} 
                                                topicId = {this.state.topicId} 
                                                index = {this.state.index} />                            
                                :
                                    <CardBehide isVisible={this.state.isVisible} 
                                                isLeft = {this.state.isLeft} 
                                                topicId = {this.state.topicId} 
                                                index = {this.state.index}/>
                            }                                                       
                        </div>                   
                        <div class='arrow-right col-3'>
                            <span class='right-title' onClick={this.onClickRight}>
                                <FontAwesomeIcon color='green' icon="caret-right" size="8x"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardItemDetail;