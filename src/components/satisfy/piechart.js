import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Học tiếng Anh', 'Chơi trò chơi', 'Kiểm tra'],
                datasets: [
                  {
                    data: [
                      30,
                      40,
                      30
                    ],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                    ]
                  }
                ]
              }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
    }

    render() {
        return (
            <div className="pieChart">
                <Pie
                    data={this.state.chartData}
                    width={100}
	                height={70}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Biểu đồ tổng quan về quá trình sử dụng web',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default PieChart;