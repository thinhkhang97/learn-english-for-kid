import React, { Component } from 'react';
import './index.css';
import BarChart from './barchart';
import PieChart from './piechart';
import Menu from './navigation';
import {Link} from 'react-router-dom';

class Satisfy extends Component {
    state={
        typePie: 'Xem theo tuần',
        typeChart: 'Xem số lần học tiếng Anh',
        typeChartTime: 'Xem theo tuần',
    }
    getLabelForChart = () => {
        switch(this.state.typeChartTime){
            case 'Xem theo tuần':
                return ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];
            case 'Xem theo tháng':
                return ['1','5','10','15','20','25','Ngày cuối tháng']
        }
    }
    getDataForChart = () => {
        if(this.state.typeChartTime==='Xem theo tuần')
            switch(this.state.typeChart) {
                case 'Xem số lần học tiếng Anh' :
                    return [12,35,20,48,14,26,55];
                case 'Xem số lần học chơi trò chơi' :
                    return [44,35,25,10,14,55,26];
                default: 
                    return [25,46,35,12,36,0,22]
            }
        else {
            switch(this.state.typeChart) {
                case 'Xem số lần học tiếng Anh' :
                    return [25,46,35,12,36,0,22];
                case 'Xem số lần học chơi trò chơi' :
                    return [12,35,20,48,14,26,55];
                default: 
                    return [44,35,25,10,14,55,26]
            }
        }
    }
    render() {
        return (
            <div className='satisfy-container' >
                <div className='left-container'>
                    <div className='header'>
                    <Link to='/'>
                        <img src={require('./images/logo.png')} onClick={() => 
                                console.log('click logo')} />
                    </Link>
                        
                    </div>
                    <div className='sas-content'>
                        <piechart class="col-sm-5">
                            <form>
                                <div class="form-group">
                                    <label style={{fontWeight: 'bold'}} for="sel1">Chọn thời gian xem</label>
                                    <select class="form-control" id="sel1" 
                                    onChange={(e)=>{
                                        console.log('Option',e.target.value)
                                        this.setState({typePie: e.target.value})
                                    }}>
                                        <option>Xem theo tuần</option>
                                        <option>Xem theo tháng</option>
                                    </select>
                                </div>
                            </form>
                            <PieChart legendPosition="bottom" data={
                                this.state.typePie ==='Xem theo tuần' ? [25,35,40] : [15,25,60]}/>
                        </piechart>
                        <barchart class="col-sm-5">
                            <form>
                                <div class="form-group">
                                    <label style={{fontWeight: 'bold'}} for="sel1">Chọn loại cần xem</label>
                                    <select class="form-control" id="sel1" onChange={(e)=>{
                                        console.log('Option',e.target.value)
                                        this.setState({typeChart: e.target.value})
                                    }}>
                                        <option>Xem số lần học tiếng Anh</option>
                                        <option>Xem số lần học chơi trò chơi</option>
                                        <option>Xem số lần học làm kiểm tra</option>
                                    </select>
                                </div>
                            </form>
                            <form>
                                <div class="form-group">
                                    <label for="sel1">Chọn thời gian xem</label>
                                    <select class="form-control" id="sel1" onChange={(e)=>{
                                        console.log('Option',e.target.value)
                                        this.setState({typeChartTime: e.target.value})
                                    }}>
                                        <option>Xem theo tuần</option>
                                        <option>Xem theo tháng</option>
                                    </select>
                                </div>
                            </form>
                            
                            <BarChart legendPosition="bottom"
                                labels={this.getLabelForChart()}
                            data={this.getDataForChart()}/>
                        </barchart>
                    </div>
                </div>
                <div className='right-container'>
                    <Menu />
                </div>
            </div>
        );
    }
}

export default Satisfy;