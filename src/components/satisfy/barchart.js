import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
    }

    render() {
        const chartData = {
            labels: this.props.labels,
            datasets: [
              {
                data: this.props.data,
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
        return (
            <div className="chart">
                <Bar
                    data={chartData}
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