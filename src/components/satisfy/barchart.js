import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'],
                datasets: [
                  {
                    data: [
                      6,
                      4,
                      8,
                      9,
                      10,
                      1,
                      2
                    ],
                    backgroundColor: [
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(75, 192, 192, 0.6)'
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
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={80}
	                height={56}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Biểu đồ tổng quan về quá trình sử dụng web',
                            fontSize: 25
                        },
                        legend: {
                            display: false,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default BarChart;