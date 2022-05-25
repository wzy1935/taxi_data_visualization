import React from "react";
import {Button, Slider} from 'antd';
import 'antd/dist/antd.css';
import {CaretRightOutlined, PauseOutlined, PoweroffOutlined} from '@ant-design/icons';

const DEFAULT_CONTROL = {
    begin: 0,
    current: 28800,
    end: 86399,
    enableExampleHeatLayer: false,
    enableCabTripLayer: false,
    enableVehicleTravelLayer: false,
    enablePlaying: false,
    threeValues: [0, 43200, 86400]
}


class Control extends React.Component {

    constructor(props) {
        super(props)
        this.state = DEFAULT_CONTROL
        setInterval(this.fetchThreeValue, 100)
    }

    fetchThreeValue = () => {
        if (this.state['enablePlaying'] && this.state['threeValues'][1] < this.state['threeValues'][2]) {
            // let three = this.state['threeValues']
            // three[1] = Math.min(1000 + this.state['threeValues'][1], this.state['threeValues'][2])
            // let enablePlaying = this.state['enablePlaying']
            // let cur = three[1]
            //
            // this.setState({'threeValues': three, 'current': cur, 'enablePlaying': enablePlaying})
            this.state['threeValues'][1] = Math.min(1000 + this.state['threeValues'][1], this.state['threeValues'][2]);
            this.state['current'] = this.state.threeValues[1];
        }
        this.onChange();
    }

    onChange = () => {
        this.props.onChange(this.state)
    }

    sliderChanged = (value) => {
        this.setState({'threeValues': value}, this.onChange)
    }

    changeBegin = (event) => {
        let val = Number(event.target.value)
        this.setState({'begin': val}, this.onChange)
    }

    changeCurrent = (event) => {
        let val = Number(event.target.value)
        this.setState({'current': val}, this.onChange)
    }

    changeEnd = (event) => {
        let val = Number(event.target.value)
        this.setState({'end': val}, this.onChange)
    }

    changeLayer = (layerName) => {
        this.state[layerName] = !this.state[layerName]
        this.onChange()
    }

    changePlayingState = (val) => {

        // this.state['enablePlaying'] = val
        this.setState({'enablePlaying': val}, this.onChange)
    }

    resetMediumValue = () => {
        let val = [this.state['threeValues'][0], this.state['threeValues'][1], this.state['threeValues'][2]]
        val[1] = this.state['threeValues'][0]
        this.setState({'threeValues': val, 'current': val[1]}, this.onChange)
    }


    render() {
        return (
            <div className=" absolute p-6 bg-white rounded-md shadow-md left-4 top-4 p-2">
                <button
                    className={" p-2 m-2 rounded-md shadow-md text-white " + (this.state.enableGetInTaxiLayer ? " bg-green-600" : "bg-gray-600")}
                    onClick={() => {

                    }}
                >上车地点
                </button>
                <button
                    className={" p-2 m-2 rounded-md shadow-md text-white " + (this.state.enableGetInTaxiClusterLayer ? " bg-green-600" : "bg-gray-600")}
                    onClick={() => {

                    }}
                >上车地点聚类
                </button>
                <br/>
                <button
                    className={" p-2 m-2 rounded-md shadow-md text-white " + (this.state.enableGetOffTaxiLayer ? " bg-green-600" : "bg-gray-600")}
                    onClick={() => {

                    }}
                >下车地点
                </button>
                <button
                    className={" p-2 m-2 rounded-md shadow-md text-white " + (this.state.enableGetOffTaxiClusterLayer ? " bg-green-600" : "bg-gray-600")}
                    onClick={() => {

                    }}
                >下车地点聚类
                </button>
                <br/>

                <button
                    className={" p-2 m-2 rounded-md shadow-md text-white " + (this.state.enableVehicleTravelLayer ? " bg-green-600" : "bg-gray-600")}
                    onClick={() => {
                        this.changeLayer('enableVehicleTravelLayer')
                    }}
                >车辆行程
                </button>
                <button
                    className={" p-2 m-2 rounded-md shadow-md text-white " + (this.state.enablePeakSectionLayer ? " bg-green-600" : "bg-gray-600")}
                    onClick={() => {

                    }}
                >高峰路段
                </button>

                <br/>
                <text>
                    begin
                </text>

                <text>
                    end
                </text>
                <br/>
                <Button type="primary" shape="circle" icon={<CaretRightOutlined/>} onClick={() => {
                    this.changePlayingState(true);
                }}/>
                <Button type="primary" shape="circle" icon={<PauseOutlined/>} onClick={() => {
                    this.changePlayingState(false);
                }}/>
                <Button type="primary" shape="circle" icon={<PoweroffOutlined/>} onClick={()=>{
                    this.resetMediumValue();
                    this.changePlayingState(false);
                }

                }/>

                <Slider key={Date.now()} range min={0} max={86400} defaultValue={this.state['threeValues']} disabled={false} onChange={
                    this.sliderChanged
                }/>

                <br/>
            </div>
        )
    }

}

export {Control, DEFAULT_CONTROL};