import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.global.layouts = { padding: 5 }

function chartParams(data, year){
  return {
    labels: Object.keys(data),
    datasets: [{
        label: `New Users in ${year}`,
        fill: true,
        lineTension: 0.1,
        borderCapStyle: 'butt',
        borderWidth: 5,
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(data)
      }]
  }
};
function chartOptions(dateLa){
  //Todo: labels won't update on content change, possible way to tie to state?  
  return {
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                  },
                scaleLabel: {
                  display: true,
                  labelString: 'New Users'
                  }
                }
            ]
        }
  }
}


export default class LineChart extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div style={{width:'98%'}}>
        <Line data={chartParams(this.props.data, this.props.year)} options={chartOptions()}/>
      </div>
    )
  }
}
