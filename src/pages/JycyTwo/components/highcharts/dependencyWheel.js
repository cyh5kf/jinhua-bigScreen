import React, { Component } from 'react';
import Highcharts from 'highcharts';

require('highcharts/modules/sankey')(Highcharts);
require('highcharts/modules/dependency-wheel')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);

class DependencyWheel extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   myChart: {},
    //   nextProps: {}
    // }

    this.option = {
      title: {
        text: ''
      },
      chart: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [
        {
          keys: ['from', 'to', 'weight'],
          nodeWidth: 10,
          nodePadding: 0,
          data: [],
          type: 'dependencywheel',
          name: 'Dependency wheel series',
          dataLabels: {
            color: '#fff',
            style: {
              fontSize: '24px',
              fontWeight: '400'
            },
            textPath: {
              enabled: true,
              attributes: {
                dy: 6
              }
            },
            distance: 20
          },
          size: '85%'
        }
      ]
    }
  }
  componentDidMount() {
    const {ydata} = this.props;
    this.dataChange(ydata);
  }


  // componentDidMount() {
  //   Highcharts.chart('container', this.option);
  //   this.dataChange();
  // }
  componentWillReceviceProps(nextProps) {
    const {ydata} = nextProps;
    // if (JSON.stringify(nextProps) !==) {
      this.dataChange(ydata);
    // }
  }
  dataChange = (data) => {
    this.option.series[0].data = data;
    Highcharts.chart('container', this.option);
  }
  render() {
    return <div id="container" style={{ width: '410px', height: '410px'}}></div>;
  }
}

DependencyWheel.propTypes = {}

export default DependencyWheel