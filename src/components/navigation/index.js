import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ReactTooltip from 'react-tooltip';
import {connect} from 'react-redux';

class Menu extends Component {
    render() {
        return (
            <div className='menu-container'>
                <div className='menu-item' style={{visibility: this.props.isLogin!==null ? 'hidden': 'initial'}}>
                    <Link to='/login'>
                        <img src={require('./images/login.png')} data-tip='Đăng nhập' />
                        <ReactTooltip />
                    </Link>
                </div>
                <div className='menu-item' style={{visibility: this.props.isLogin!==null ? 'hidden': 'initial'}}>
                    <Link to='/register'>
                        <img src={require('./images/clipboard.png')} data-tip='Đăng Kí' />
                        <ReactTooltip />
                    </Link>
                </div>
                <div className='menu-item'>
                    <img src={require('./images/student.png')} data-tip='Thông tin tài khoản' />
                    <ReactTooltip />
                </div>
                <div className='menu-item'>
                    <Link to={this.props.isLogin===null ? '/login':'/satisfy'}>
                        <img src={require('./images/diagram.png')} data-tip='Thống kê' />
                        <ReactTooltip />
                    </Link>
                </div>
                <div className='menu-item'>
                    <img src={require('./images/help.png')} data-tip='Trợ giúp' />
                    <ReactTooltip />
                </div>
                <div className='menu-item'>
                    <img src={require('./images/browser.png')} data-tip='Liên hệ' />
                    <ReactTooltip />
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isLogin: state.account
    }
}
export default connect(mapStateToProps)(Menu);