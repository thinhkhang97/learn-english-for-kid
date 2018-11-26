import React, { Component } from 'react';
import './index.css';
import BarChart from './barchart';
import PieChart from './piechart';
import Menu from './navigation';

class Satisfy extends Component {
    render() {
        return (
            <div className="satisfy-container">
                <div className='logo'>
                    <img src={require('./images/logo.png')} />
                </div>
                <piechart class="col-sm-5">
                    <form>
                        <div class="form-group">
                            <label for="sel1">Chọn thời gian xem</label>
                            <select class="form-control" id="sel1">
                                <option>Xem theo tuần</option>
                                <option>Xem theo tháng</option>
                            </select>
                        </div>
                    </form>
                    <PieChart legendPosition="bottom" />
                </piechart>
                <barchart class="col-sm-5">
                    <form>
                        <div class="form-group">
                            <label for="sel1">Chọn loại cần xem</label>
                            <select class="form-control" id="sel1">
                                <option>Xem số lần học tiếng Anh</option>
                            </select>
                        </div>
                    </form>
                    <form>
                        <div class="form-group">
                            <label for="sel1">Chọn thời gian xem</label>
                            <select class="form-control" id="sel1">
                                <option>Xem theo tuần</option>
                                <option>Xem theo tháng</option>
                            </select>
                        </div>
                    </form>
                    <BarChart legendPosition="bottom" />
                </barchart>
                <div className="menu">
                    <Menu />
                </div>
            </div>
        );
    }
}

export default Satisfy;