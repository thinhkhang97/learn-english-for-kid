import React, { Component } from 'react'

class SideBarNumber extends Component {
    render() {
        return (
            <div class='row mt-1'>
                <div className='active col slide-bar ml-1' 
                style={this.props.index == 1 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}
                onClick={() => this.props.onClickOnSideBar(1)}>
                    1
                </div>
                <div class='col slide-bar ml-1' 
                style={this.props.index == 2 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}
                onClick={() => this.props.onClickOnSideBar(2)}>
                    2
                </div>
                <div class='col slide-bar ml-1' 
                style={this.props.index == 3 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}
                onClick={() => this.props.onClickOnSideBar(3)}>
                    3
                </div>
                <div class='col slide-bar ml-1' 
                style={this.props.index == 4 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}
                onClick={() => this.props.onClickOnSideBar(4)}>
                    4
                </div>
                <div class='col slide-bar ml-1' 
                style={this.props.index == 5 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}
                onClick={() => this.props.onClickOnSideBar(5)}>
                    5
                </div>
                <div class='col slide-bar ml-1' 
                style={this.props.index == 6 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}
                onClick={() => this.props.onClickOnSideBar(6)}>
                    6
                </div>
                <div class='col slide-bar ml-1' 
                style={this.props.index == 7 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}
                onClick={() => this.props.onClickOnSideBar(7)}>
                    7
                </div>
                <div class='col slide-bar ml-1' 
                style={this.props.index == 8 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}
                onClick={() => this.props.onClickOnSideBar(8)}>
                    8
                </div>
                <div class='col slide-bar ml-1' 
                style={this.props.index == 9 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}
                onClick={() => this.props.onClickOnSideBar(9)}>
                    9
                </div>
            </div>
        )
    }
}

export default SideBarNumber;