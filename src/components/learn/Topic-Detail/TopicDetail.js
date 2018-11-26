import React, { Component } from 'react';
import './TopicDetails.css'

//component
import Fruit from './Fruit'
import Animal from './Animal'
import Vehicle from './Vehicles'
import Introduction from './Introduction'

class TopicDetail extends Component {
    render() {
        return (
            <div class='container'>
            {
                this.props.topicId == 1 ?
                <Fruit onClickCard={(index) => this.props.onClickTopicDetail(index)}/>
                : this.props.topicId == 2 ?
                <Animal onClickCard={(index) => this.props.onClickTopicDetail(index)}/>    
                : this.props.topicId == 3 ? 
                <Vehicle onClickCard={(index) => this.props.onClickTopicDetail(index)}/>
                :
                <Introduction />  
            }
            </div>
        )
    }
}

export default TopicDetail