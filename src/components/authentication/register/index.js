import React, { Component } from 'react';
import './index.css';
import Input from '../input';
import Button from '../button';
import { Link, withRouter } from 'react-router-dom';
import swal from 'sweetalert2';

class Register extends Component {
    state = {
        fullname:'',
        email: '',
        username: '',
        password: '',
        confirmpassword: ''
    }
    handleOnChange= (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    comfirmAccount = () => {
        return this.state.password === this.state.confirmpassword &&
        this.state.fullname !== '' && this.state.email !== ''
        && this.state.password!== '' && this.state.username !== ''
    }
    render() {
        const success = {
            title: 'Thành công',
            text: 'Đăng kí thành công',
            type: 'success',
            confirmButtonText: 'Đi tiếp nào!',
            onAfterClose: () => {
                this.props.history.push('/login');
            }
        }
        const error = {
            title: 'Thất bại',
            text: 'Các thông tin bạn nhập chưa đúng, vui lòng nhập 2 mật khẩu khớp với nhau và kiểm tra lại các thông tin khác',
            type: 'error',
            confirmButtonText: 'Thử lại'
        }
        return (
            <div className='register-container'>
                    <div className='area-1'>
                        <Link 
                        style={{
                        height: '50%'
                        , display:'flex', justifyContent: 'center', alignItems: 'center'}} to='/'>
                            <img src={require('../../../images/logo/logo.svg')} />
                        </Link>
                    </div>
               

                <div className='area-2'>
                    <div className='title'>
                        Đăng kí
                    </div>
                    <div className='form'>
                        <Input 
                        placeholder='Họ và tên' 
                        value={this.state.fullname} 
                        name='fullname' 
                        onChange={(e)=>this.setState({fullname: e.target.value})}/>

                        <Input 
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        placeholder='Email' 
                        onChange={(e)=>this.setState({email: e.target.value})}/>

                        <Input 
                        placeholder='Tên Đăng nhập' 
                        value={this.state.username} 
                        name='username' 
                        onChange={(e)=>this.setState({username: e.target.value})}/>

                        <Input 
                        type='password' 
                        name='password' 
                        value={this.state.password} 
                        placeholder='Mật khẩu' 
                        onChange={(e)=>this.setState({password: e.target.value})}/>

                        <Input 
                        type='password' 
                        name='confirmpassword' 
                        value={this.state.confirmpassword} 
                        placeholder='Xác nhận mật khẩu' 
                        onChange={(e)=>this.setState({confirmpassword: e.target.value})}/>

                        <Button text='Đăng kí' onClick={()=>swal(this.comfirmAccount() === true ? success : error)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);