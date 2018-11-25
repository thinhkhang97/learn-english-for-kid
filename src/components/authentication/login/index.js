import React, { Component } from 'react';
import './index.css';
import Input from '../input';
import Button from '../button';
import { Link, withRouter } from 'react-router-dom';
import swal from 'sweetalert2';
class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    comfirmAccount = () => {
        return this.state.username === 'demo' && this.state.password === 'demo'
    }
    render() {
        const success = {
            title: 'Thành công',
            text: 'Đăng nhập thành công',
            type: 'success',
            confirmButtonText: 'Đi tiếp nào!',
            onAfterClose: () => {
                this.props.history.push('/');
            }
        }
        const error = {
            title: 'Thất bại',
            text: 'Tài khoản của bạn chưa đúng',
            type: 'error',
            confirmButtonText: 'Thử lại'
        }
        return (
            <div className='login-container'>
                <div className='content'>
                    <Link to='/'>
                        <img src={require('../../../images/logo/logo.svg')} />
                    </Link>
                    <Input
                        iconName='user'
                        value={this.state.username}
                        placeholder='Ten dang nhap'
                        onChange={(e) =>
                            this.setState({ username: e.target.value })} />
                    <Input
                        iconName='lock'
                        value={this.state.password}
                        placeholder='Mat khau'
                        type='password'
                        onChange={(e) =>
                            this.setState({ password: e.target.value })} />

                    <Button text='Đăng nhập' onClick={() => swal(this.comfirmAccount() === true ? success : error)} />
                    <div className='sign-up'>
                        <Link to='register'>
                            <a>Đăng kí</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);