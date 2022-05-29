import React from "react";

import trace from '../static/trace.mp4'
import od from '../static/OD.mp4'
import agg from '../static/aggregation.png'
import daily_travel from '../static/daily_travel.png'
import number_of_passenger from '../static/number_of_passenger.png'
import passenger_time from '../static/passenger_time.png'
import speed_with from '../static/speed_with.png'
import speed_without from '../static/speed_without.png'
import district_people from '../static/district_people.png'
import district_inon from '../static/district_inon.png'
import district from '../static/district.png'
import map from '../static/map.png'
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
                    <h1 className=" font-bold text-4xl py-2">后端结果分析</h1>
                    <h2 className=" font-bold text-2xl py-1">一、上车人数随时间变化的折线图</h2>
                    <img src={passenger_time}></img>
                    <h2 className=" font-bold text-2xl py-1">二、出租车一天行驶距离分布</h2>
                    <img src={daily_travel}></img>
                    <h2 className=" font-bold text-2xl py-1">三、出租车一天载客人数分布</h2>
                    <img src={number_of_passenger}></img>
                    <h2 className=" font-bold text-2xl py-1">四、出租车载客速度分布</h2>
                    <img src={speed_with}></img>
                    <h2 className=" font-bold text-2xl py-1">五、出租车空载速度分布</h2>
                    <img src={speed_without}></img>
                    <div className="flex flex-row">
                    <h2 className=" font-bold text-2xl py-1">六、各区出行人数统计  </h2>
                    <div className="ml-20  ">
                        <h2 className="font-bold text-2xl py-1">七、各区人员流动情况  </h2>
                        <p>District 为上车地点， 后面几列为对应下车地点所在的区</p>
                    </div>
                    </div>
                    <img src={district}></img>
                    <img className=" h-96 " src={map}></img>
                    

                </div>
			</div>
        )
    }

}

export {Report};