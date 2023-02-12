import React from "react";
import {Button, Slider} from 'antd';
import 'antd/dist/antd.css';
import {CaretRightOutlined, PauseOutlined, PoweroffOutlined} from '@ant-design/icons';

const DEFAULT_CONTROL = {
    current: 480,
    begin: 0,
    end: 1440,
    enableExampleHeatLayer: false,
    enableCabTripLayer: false,
    enableVehicleTravelLayer: false,
    enableGetOnClusterLayer: false,
    enableGetOffClusterLayer: false,
    enablePlaying: false,
    threeValues: [0, 480, 1440],
    showReport: false,
    enablePickUpPointLayer:false,
    enableDropOffPointLayer:false
}


class Control extends React.Component {

    constructor(props) {
        super(props);
        this.state = DEFAULT_CONTROL;
        setInterval(this.fetchThreeValue, 50);
    }

    fetchThreeValue = () => {
        if (this.state['enablePlaying'] && this.state['threeValues'][1] < this.state['threeValues'][2]) {
            let tmp = [this.state['threeValues'][0], Math.min(1 + this.state['threeValues'][1], this.state['threeValues'][2]) , this.state['threeValues'][2]];
            this.setState({'threeValues': tmp}, this.onChange);
        }

    }


    formatter = (value) => {
        return ((Math.floor(value / 60)).toString().length < 2 ? "0" + (Math.floor(value / 60)).toString() : 
        (Math.floor(value / 60)).toString()) + ":" + ((value % 60).toString().length < 2 ? "0" + (value % 60).toString() : (value % 60).toString());
    }

    onChange = () => {
        this.setState({'begin': this.state.threeValues[0]}, () => {
            this.setState({'current': this.state.threeValues[1]}, () => {
                this.setState({'end': this.state.threeValues[2]}, () => {
                    this.props.onChange(this.state);
                });
            });
        });
        

    }

    sliderChanged = (value) => {
        this.setState({'threeValues': value}, this.onChange);
    }

    changeLayer = (layerName) => {
        let newObj = {}
        newObj[layerName] = !this.state[layerName]
        this.setState(newObj, this.onChange);
        this.onChange();
    }

    changePlayingState = (val) => {
        this.setState({'enablePlaying': val}, this.onChange);
    }

    resetMediumValue = () => {
        let val = [this.state['threeValues'][0], this.state['threeValues'][1], this.state['threeValues'][2]];
        val[1] = this.state['threeValues'][0];
        this.setState({'threeValues': val, 'current': val[1]}, this.onChange);
    }

    render() {
        return (
            <div className=" ml-6 mt-6 p-6 pt-3 bg-gray-100 rounded-md shadow-md h-min min-w-fit pointer-events-auto">
                <button
                    className={" p-2 transition w-28 m-2 rounded-md shadow-md"
                    + (this.state.enablePickUpPointLayer ? " text-white bg-blue-500 hover:bg-blue-400" : " bg-white hover:bg-gray-200")}
                    onClick={() => {
                        this.changeLayer('enablePickUpPointLayer');
                    }}
                >上车地点
                </button>
                <button
                    className={" p-2 transition w-28 m-2 rounded-md shadow-md"
                        + (this.state.enableGetOnClusterLayer ? " text-white bg-blue-500 hover:bg-blue-400" : " bg-white hover:bg-gray-200")}
                    onClick={() => {
                        this.changeLayer('enableGetOnClusterLayer');
                    }}
                >上车地点聚类
                </button>
                <br/>
                <button
                    className={" p-2 transition w-28 m-2 rounded-md shadow-md"
                    + (this.state.enableDropOffPointLayer ? " text-white bg-blue-500 hover:bg-blue-400" : " bg-white hover:bg-gray-200")}
                    onClick={() => {
                        this.changeLayer('enableDropOffPointLayer');
                    }}
                >下车地点
                </button>
                <button
                    className={" p-2 transition w-28 m-2 rounded-md shadow-md"
                        + (this.state.enableGetOffClusterLayer ? " text-white bg-blue-500 hover:bg-blue-400" : " bg-white hover:bg-gray-200")}
                    onClick={() => {
                        this.changeLayer('enableGetOffClusterLayer');
                    }}
                >下车地点聚类
                </button>
                <br/>

                <button
                    className={" p-2 transition w-28 m-2 rounded-md shadow-md"
                    + (this.state.enableVehicleTravelLayer ? " text-white bg-blue-500 hover:bg-blue-400" : " bg-white hover:bg-gray-200")}
                    onClick={() => {
                        this.changeLayer('enableVehicleTravelLayer');
                    }}
                >车辆行程
                </button>
                <button
                    className={" p-2 transition w-28 m-2 rounded-md shadow-md"
                    + (this.state.showReport ? " text-white bg-orange-400 hover:bg-orange-300" : " bg-white hover:bg-gray-200")}
                    onClick={() => {
                        this.setState({'showReport': !this.state.showReport},
                            () => {this.props.setReport(this.state.showReport)});
                    }}
                >查看报告
                </button>

                <hr className=" my-4"/>

                <Slider range tipFormatter={this.formatter} min={0} max={1440} value={this.state['threeValues']} disabled={false} onChange={
                    this.sliderChanged
                }/>
                <div className=" flex justify-between text-gray-500">
                    <div>begin</div>
                    <div className=" flex justify-center space-x-2">
                        <Button type="primary" shape="circle" icon={this.state['enablePlaying'] ? <PauseOutlined/> : <CaretRightOutlined/>} onClick={() => {
                            this.changePlayingState(!this.state['enablePlaying']);
                        }}/>
                        <Button type="primary" shape="circle" icon={<PoweroffOutlined/>} onClick={()=>{
                            this.resetMediumValue();
                            this.changePlayingState(false);
                        }}/>
                    </div>
                    <div>end</div>
                </div>

            </div>

        )
    }


}

export {Control, DEFAULT_CONTROL};