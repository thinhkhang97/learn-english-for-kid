import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ReactTooltip from 'react-tooltip';

class Menu extends Component {
    render() {
        return (
            <div className='menu-container'>
                <div className='menu-item'>
                    <img src={require('../images/student.png')} data-tip='Thông tin tài khoản' />
                    <ReactTooltip />
                </div>
                <div className='menu-item'>
                    <Link to='/satisfy'>
                        <img src={require('../images/diagram.png')} data-tip='Thống kê' />
                        <ReactTooltip />
                    </Link>
                </div>
                <div className='menu-item'>
                    <img src={require('../images/help.png')} data-tip='Trợ giúp' />
                    <ReactTooltip />
                </div>
                <div className='menu-item'>
                    <img src={require('../images/browser.png')} data-tip='Liên hệ' />
                    <ReactTooltip />
                </div>
            </div>
        );
    }
}

export default Menu;