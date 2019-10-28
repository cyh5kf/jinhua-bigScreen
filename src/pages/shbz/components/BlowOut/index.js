import React, { PureComponent } from 'react';
import './index.css';

export default class BlowOut extends PureComponent {
  renderItems() {
    const { data } = this.props;
    const divisionItems = data.map((item, index) => {
      if (item.name !== '全市') {
        return (
          <div id={`item${index + 1}`}>
            <div
              className={`text-center ${index === 0 ? 'font-size-28' : index === 1 ? 'font-size-26' : index === 2 ? 'font-size-24' : 'font-size-20'} ${
                index === 0 ? 'gold-color-g' : index === 1 ? 'silver-color-g' : index === 2 ? 'bronze-color-g' : ''
              }`}
            >
              {item.value}
            </div>
            <div
              className={`text-center ${index === 0 ? 'font-size-24' : index === 1 ? 'font-size-22' : index === 2 ? 'font-size-20' : 'font-size-16'} ${
                index === 0 ? 'gold-color' : index === 1 ? 'silver-color' : index === 2 ? 'bronze-color' : ''
              }`}
            >
              {item.name}
            </div>
          </div>
        );
      }
    });
    return divisionItems;
  }
  render() {
    return (
      <div className="font-size-12">
        {this.renderItems()}
        {/* <div id="item1">
          <div className="text-center font-size-28 gold-color-g">85.76</div>
          <div className="text-center font-size-24 gold-color">永康市</div>
        </div>
        <div id="item2">
          <div className="text-center font-size-26 silver-color-g">84.44</div>
          <div className="text-center font-size-22 silver-color">东阳市</div>
        </div>
        <div id="item3">
          <div className="text-center font-size-24 bronze-color-g">84.23</div>
          <div className="text-center font-size-20 bronze-color">磐安市</div>
        </div>
        <div id="item4">
          <div className="text-center font-size-20">80.0</div>
          <div className="text-center font-size-16">婺城区</div>
        </div>
        <div id="item5">
          <div className="text-center font-size-20">79.01</div>
          <div className="text-center font-size-16">市本级（开发区）</div>
        </div>
        <div id="item6">
          <div className="text-center font-size-20">78.32</div>
          <div className="text-center font-size-16">武义市</div>
        </div>
        <div id="item7">
          <div className="text-center font-size-20">78.14</div>
          <div className="text-center font-size-16">义乌市</div>
        </div>
        <div id="item8">
          <div className="text-center font-size-20">77.6</div>
          <div className="text-center font-size-16">浦江县</div>
        </div>
        <div id="item9">
          <div className="text-center font-size-20">72.41</div>
          <div className="text-center font-size-16">兰溪市</div>
        </div>
        <div id="item10">
          <div className="text-center font-size-20">79.01</div>
          <div className="text-center font-size-16">金东区</div>
        </div> */}
      </div>
    );
  }
}
