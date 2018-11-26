import React, { Component } from 'react';
import './topics.css'
import Fruit from '../image/fruit-clip-art-1-1516150908.png'
import Animal from '../image/Animal/animal-png-hd-for-kids-stickers-for-kids-jungle-animals-500.png'
import Vehicle from '../image/Vehicles/Vehicles.png'

class Topic extends Component {
    
    render() {
        return (
            <div class = "container-fluid">
                <div class = 'row topic mt-3 mb-3 pb-2  ' 
                    onClick={() => this.props.onClickTopic(1)}
                    style={this.props.topicId == 1 ? {backgroundColor: 'orange'} : {backgroundColor: '#52741E'}}>
                    <div class='col-6'>
                        <img class="img-fluid rounded img-custom" alt="Responsive image" src={Fruit}></img>
                    </div>
                    <div class='col-6 title-topic'>
                        Fruit
                    </div>
                </div>
                <div class = 'row topic mt-3 mb-3 pb-2' 
                    onClick={() => this.props.onClickTopic(2)}
                    style={this.props.topicId == 2 ? {backgroundColor: 'orange'} : {backgroundColor: '#52741E'}}>
                    <div class='col-6'>
                        <img class="img-fluid rounded img-custom" alt="Responsive image" src={Animal}></img>
                    </div>
                    <div class='col-6 title-topic'>
                        Animal
                    </div>
                </div>
                <div class = 'row topic mt-3 mb-3 pb-2' 
                    onClick={() => this.props.onClickTopic(3)}
                    style={this.props.topicId == 3 ? {backgroundColor: 'orange'} : {backgroundColor: '#52741E'}}>
                    <div class='col-6'>
                        <img class="img-fluid rounded img-custom" alt="Responsive image" src={Vehicle}></img>
                    </div>
                    <div class='col-6 title-topic'>
                        Vehicles
                    </div>
                </div>
                <div class = 'row topic mt-3 mb-3 pb-2  ' 
                    onClick={() => this.props.onClickTopic(4)}
                    style={this.props.topicId == 4 ? {backgroundColor: 'orange'} : {backgroundColor: '#52741E'}}>
                    <div class='col-6'>
                        <img class="img-fluid rounded img-custom" alt="Responsive image" src={Fruit}></img>
                    </div>
                    <div class='col-6 title-topic'>
                        Fruit
                    </div>
                </div>
                <div class = 'row topic mt-3 mb-3 pb-2' 
                    onClick={() => this.props.onClickTopic(5)}
                    style={this.props.topicId == 5 ? {backgroundColor: 'orange'} : {backgroundColor: '#52741E'}}>
                    <div class='col-6'>
                        <img class="img-fluid rounded img-custom" alt="Responsive image" src={Animal}></img>
                    </div>
                    <div class='col-6 title-topic'>
                        Animal
                    </div>
                </div>
                <div class = 'row topic mt-3 mb-3 pb-2  ' 
                    onClick={() => this.props.onClickTopic(6)}
                    style={this.props.topicId == 6 ? {backgroundColor: 'orange'} : {backgroundColor: '#52741E'}}>
                    <div class='col-6'>
                        <img class="img-fluid rounded img-custom" alt="Responsive image" src={Fruit}></img>
                    </div>
                    <div class='col-6 title-topic'>
                        Fruit
                    </div>
                </div>
            </div>
        )
    }
}

export default Topic;