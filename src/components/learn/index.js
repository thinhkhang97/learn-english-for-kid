import React, { Component } from 'react';
import './index.css';
import logo from './image/logo.png';
import Topic from './Topic/topics'
import TopicDetail from './Topic-Detail/TopicDetail'
import CardItemDetail from './Card-Item-Detail/CardItemDetail';
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';
import start from './image/fruit/h_stickers_cars3_afbdf474.gif'
import finish from './image/fruit/source-1.gif'
class Learn extends Component {

    state = {
        topicId: 0,
        isDetail: false,
        cardId: 0,
        isReview: false,
        timeLeft: 10
    }

    onClickReview = async () => {
        this.setState({ 
            timeLeft: 10,                
        })
        swal({
            imageUrl: start,
            imageWidth: 400,
            imageHeight: 150,
            animation: false,
            customClass: 'animated tada',
            confirmButtonText: 'Bắt đầu thôi!'
        }).then(result => {
            if(result.value) {
                this.setState({ 
                    isReview: true,                
                })
        
                let interval = setInterval(this.timer, 1000);
                this.setState({ interval: interval }); 
            }
        })
    }

    timer = () => {
        if (this.state.timeLeft > 0) {
            this.setState({ timeLeft: this.state.timeLeft - 1 });
        }
        else {
            this.onClickFinish(); 
        }
    };

    onClickFinish = () => {
        clearInterval(this.state.interval);

        swal({
            title: 'Bạn chắc muốn kết thúc?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Hủy',
            confirmButtonText: 'Kết thúc!'
        }).then((result) => {
            if (result.value) {
                swal({
                    imageUrl: finish,
                    html:
                        '<b style="font-weight: bold;">Kết quả: </b>7/9. ' +
                        '<br /> ' + 
                        '<b style="font-weight: bold;">Các câu sai: </b>4, 8.',
                    imageWidth: 150,
                    imageHeight: 150,
                    animation: false,
                    customClass: 'animated tada',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#218838',
                    cancelButtonText: 'Học lại',
                    confirmButtonText: 'Làm lại!'
                }).then(result => {
                    if(result.value) {
                        clearInterval(this.state.interval);
                        this.onClickReview();
                    } else {
                        clearInterval(this.state.interval);                
                        this.setState({
                            isReview: false,
                            isDetail: false
                        });  
                    }
                }) 
            } else {
                let interval = setInterval(this.timer, 1000);
                this.setState({ interval: interval });
            }
        })       
    }

    render() {
        return (           

            <div>
                <nav className="navbar navbar-none bg-none">
                    <Link to='/'>
                        <a className="navbar-brand">
                            <img src={logo} />
                        </a>
                    </Link>
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
                                                                               
                                            <div>
                                                <CardItemDetail cardId={this.state.cardId} topicId={this.state.topicId} isReview={this.state.isReview} />
                                                {
                                                    !this.state.isReview ? 
                                                        <div className='btn-review'>
                                                            <button className='btn btn-primary' onClick={this.onClickReview}>Làm kiễm tra</button>
                                                        </div>
                                                    :    
                                                        <div className='btn-review'>
                                                            <button className='btn btn-primary' onClick={this.onClickFinish}>Kết thúc</button>
                                                        </div>
                                                }                                                
                                                {
                                                    this.state.isReview ? 
                                                        <div id="countdown">
                                                            <div id="countdown-number">{this.state.timeLeft}</div>
                                                            <svg className='svg-timer'>
                                                                <circle r="18" cx="20" cy="20"></circle>
                                                            </svg>
                                                        </div>
                                                    :
                                                        <div></div>
                                                }                                                   
                                            </div>                                            
                                       
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