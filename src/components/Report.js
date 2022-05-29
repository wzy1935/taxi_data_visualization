import React from "react";

import trace from '../static/trace.mp4'
import od from '../static/OD.mp4'
import agg from '../static/aggregation.png'

class Report extends React.Component {


    render() {
        return (
            <div className={" h-screen transition-all p-6 overflow-hidden w-full max-w-screen-lg" + (this.props.show ? " " : " invisible translate-x-10 opacity-0")}>
				<div className="bg-gray-100 shadow-md rounded-lg p-10 pointer-events-auto max-h-full overscroll-none overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">

                    {/* finish your report here... */}
                    <h1 className=" font-bold text-4xl py-2">TransBigData框架结果展示</h1>
                    <h2 className=" font-bold text-2xl py-1">一、数据清洗</h2>
                    <p>1.1清除相同的数据(某个体连续n条数据除了时间以外其他信息都相同，则可以只保留首末两条数据)</p>
                    <p>1.2清除不在深圳范围内的数据</p>
                    <p>1.3车速限制为120</p>
                    <h2 className=" font-bold text-2xl py-1">二、轨迹点栅格化统计</h2>
                    <img src={agg}></img>
                    <h2 className=" font-bold text-2xl py-1">三、OD订单可视化</h2>
                    <video  src={od} controls></video>
                    <h2 className=" font-bold text-2xl py-1">四、轨迹可视化</h2>
                    <video  src={trace} controls></video>
                    


                </div>
			</div>
        )
    }

}

export {Report};