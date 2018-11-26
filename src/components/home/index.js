import React, { Component } from 'react';
import './index.css';
import Menu from '../navigation';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div className='home-container' >
                <div className='left-container'>
                    <div className='header'>
                        <img src={require('./images/logo.png')} onClick={() => console.log('click logo')} />
                    </div>
                    <div className='home-content'>
                        <div className='area'>
                            <div className='title'>
                                Chơi game
                            </div>
                            <img src={require('./images/islam.png')} onClick={() => console.log('click logo')} />
                        </div>
                        <div className='area'>
                            <Link to='/learn'>
                            <div className='cell'>
                                <div className='title'>
                                    Học
                                </div>
                                <img src={require('./images/earth-globe.png')} onClick={() => console.log('click logo')} />
                            </div>
                            </Link>
                            <div className='cell'>
                                <img src={require('./images/award.png')} onClick={() => console.log('click logo')} />
                                <div className='title'>
                                    Vinh danh
                                </div>
                            </div>
                        </div>
                        <div className='area'>
                            <div className='title'>
                                Kiểm tra
                            </div>
                            <img src={require('./images/planet.png')} onClick={() => console.log('click logo')} />
                        </div>
                    </div>
                </div>
                <div className='right-container'>
                    <Menu />
                </div>
            </div>
        );
    }
}

export default Home;