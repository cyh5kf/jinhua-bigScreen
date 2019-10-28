import React from 'react'
import Chart from './chartComponent';
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import { yellow } from 'ansi-colors';

class Bar extends Chart {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // this.dataChange()
    }
    componentWillReceiveProps(nextProps) {
        let {option = {}, data = {}} = this.props;
        let {defaultOption} = this.state;

        // if (data.hasOwnProperty('datas') && JSON.stringify(nextProps.data.datas) !== JSON.stringify(data.datas)) {
            defaultOption.xAxis = {...defaultOption.xAxis, ...{data: data.xAxisData}};
            defaultOption.series = data.datas;
            option.theme && (defaultOption.color = this.theme[option.theme]);
            // .map(item => {
            //     return {...item, }
            // })
           this.setState({
               option: Object.assign({}, defaultOption, option)
           })

        // }

        // return true;
    }
    dataChange = () => {
        let {option, dataset} = this.props;
        if (dataset.hasOwnProperty('source')) {

        }
    }
    /**
     * option: {
     *      ...
     *      theme: 'blue/yellow'
     * }
     * data: {
     *      xAxisData: []
     *      datas: [
     *          {
     *              type: 'bar',
     *              data: []
     *          }
     *      ]
     * }
     */
    render() {
        // const {option} = this.props;
        // const datas = this.props.gct;
        const {size, option} = this.state;

        // option = {...defaultOption, ...option};


        return (
            <ReactEcharts option={option} style={size}></ReactEcharts>
        )
    }
}

export default Bar;
