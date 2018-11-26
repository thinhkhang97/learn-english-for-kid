import React, { Component } from 'react';
import './index.css';
import logo from './image/logo.png';
import Topic from './Topic/topics'
import TopicDetail from './Topic-Detail/TopicDetail'
import CardItemDetail from './Card-Item-Detail/CardItemDetail';

class Learn extends Component {

    state = {
        topicId: 0,
        isDetail: false,
        cardId: 0
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-none bg-none">
                    <a className="navbar-brand">
                        <img src={logo} />
                    </a>
                </nav>

                <div className="container-fluid mr-md-3 mb-5">
                    <div className="row mt-md-5">
                        <div class="col">
                        </div>
                        <div class="col-10">
                            <div class="row">
                                <div class='col-3 topics mr-5'>
                                    <Topic onClickTopic={(index) => { this.setState({ isDetail: false, topicId: index }) }} topicId={this.state.topicId} />
                                </div>
                                <div class='col-8 topic-details ml-2'>
                                    {
                                        this.state.isDetail ?
                                            <CardItemDetail cardId={this.state.cardId} topicId={this.state.topicId} />
                                            :
                                            <TopicDetail topicId={this.state.topicId} onClickTopicDetail={(index) => { this.setState({ isDetail: true, cardId: index }) }} />
                                    }
                                </div>
                            </div>
                        </div>
                        <div class="col">
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        );
    }
}

export default Learn;