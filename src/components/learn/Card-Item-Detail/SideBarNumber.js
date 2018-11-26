import React, { Component } from 'react'

class SideBarNumber extends Component {
    render() {
        return (
            <div class='row mt-1'>
                <div className='active col slide-bar ml-1' style={this.props.index == 1 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}>
                    1
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 2 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}>
                    2
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 3 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}>
                    3
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 4 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}>
                    4
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 5 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}>
                    5
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 6 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}>
                    6
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 7 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}>
                    7
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 8 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}>
                    8
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 9 ? { backgroundColor: 'orange' } : { backgroundColor: 'whitesmoke' }}>
                    9
                </div>
            </div>
        )
    }
}

export default SideBarNumber;