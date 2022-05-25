import React from "react";
import {Slider, Switch} from 'antd';
import {Button, Tooltip} from 'antd';
import 'antd/dist/antd.css';
import {CaretRightOutlined, PauseOutlined, PoweroffOutlined} from '@ant-design/icons';
import logo from '../static/test.png'
import vedio from '../static/trace.mp4'

class Report extends React.Component {

    constructor(props) {
        super(props);
        this.showReport=false;
    }

    show(){
		if(this.showReport){
			return (
                <div className="absolute top-0 right-0 bg-white rounded-md shadow-md w-3/4">
                    <button
                    className={"absolute top-6 right-6  p-2 rounded-md shadow-md text-white " + (this.showReport? " bg-green-600" : "bg-gray-600")}
                    onClick={() => {
                        this.showReport = !this.showReport
                        console.log(this.showReport)
                    }}
                >报告页
                </button>
                    <img src={logo} alt="logo" className="w-1/4 h-1/4">
               </img>
               <video  src={vedio} autoPlay height="300" width="300"></video >
                </div>
			)
		}else{
			return (
				<div className="absolute top-6 right-6 bg-white rounded-md shadow-md">
                    <button
                    className={" p-2 rounded-md shadow-md text-white " + (this.showReport? " bg-green-600" : "bg-gray-600")}
                    onClick={() => {
                        this.showReport = !this.showReport
                    }}
                >报告页
                </button>
                </div>
			)
		}
	}

    render() {
        return (
            <div>
				{this.show()}
			</div>
        )
    }

}

export {Report};