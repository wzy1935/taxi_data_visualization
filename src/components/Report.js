import React from "react";

import './Report.css'

import workflow from '../static/report/workflow.png'
import trace from '../static/report/trace.mp4'
import od from '../static/report/OD.mp4'
import agg from '../static/report/aggregation.png'
import daily_travel from '../static/report/daily_travel.png'
import number_of_passenger from '../static/report/number_of_passenger.png'
import passenger_time from '../static/report/passenger_time.png'
import speed_with from '../static/report/speed_with.png'
import speed_without from '../static/report/speed_without.png'
import district_people from '../static/report/district_people.png'
import district_inon from '../static/report/district_inon.png'
import district from '../static/report/district.png'
import map from '../static/report/map.png'
class Report extends React.Component {

    render() {
        return (
            <div className={" h-screen transition-all p-6 overflow-hidden w-screen max-w-screen-md" + (this.props.show ? " " : " invisible translate-x-10 opacity-0")}>
				<div className="bg-gray-100 shadow-md rounded-lg p-10 pointer-events-auto max-h-full overscroll-none overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">

                    <h1>数据挖掘小组报告</h1>
                    <p><span className=" font-bold">小组成员：</span><br/> 杨文汉夫 王奕童 陈晓珊 王增义 黎永源 黄柯睿 廖淳昊 王槐堂</p>
                    <hr/>

                    <h2>技术实现</h2>
                    <p>我们使用deck.gl等工具实现了一个出租车数据可视化平台。支持时间调节，多层数据显示等功能。我们的project实现流程如下：</p>
                    <img src={workflow}></img>

                    <h3>数据处理</h3>
                    <p>我们的后端主要负责数据处理，使用了jupyter notebook来处理数据，包括数据清洗，od表转换等，最后会生成数个json文件挂载到服务器上供前端获取。后端也使用了数据库备份保存数据。</p>
                    <p>后端的数据清洗部分在车辆行程可视化中非常重要。我们使用了TransBigData，依次处理掉了位置错误的数据、速度过快的数据，以及单次位置跨度过大的数据。而OD表生成直接由数据库生成。</p>

                    <h3>可视化</h3>
                    <p>我们的前端使用react，可视化使用的库则主要为deck.gl和TransBigData。deck.gl是一个基于WebGL的一个可视化库。我们的前端主要是基于它构建的。</p>
                    <p>TransBigData是一个比较小众的包，是基于deck.gl封装实现的。它也可以进行可视化，同时提供了大量预处理方法。我们的静态可视化是基于它生成的。</p>
                    <p>我们在前端的工作主要是使用deck.gl将后端处理好的数据显示出来。每个后端生成的json都对应一个deck.gl里的layer。我们使用了react制作了一个控制台让用户自行调整这些layer的显示。</p>

                    <hr/>

                    <h2>效果展示</h2>
                    <h3>控制台</h3>
                    <p>前端的控制台实现了用户自行展示layer的功能。用户可自行选择展示对应的时间段和时间点。起始结束点的拖动可以控制上下车以及聚类对应的范围，中间的进度条可以让用户调整车辆行程的位置。</p>
                    <p>静态数据</p>
                    <p>我们使用的TransBigData同时也生成了一些静态结果：</p>
                    <h4>轨迹点栅格化统计</h4>
                    <img src={agg}></img>
                    <h4>OD订单可视化</h4>
                    <video  src={od} controls></video>
                    <h4>轨迹可视化</h4>
                    <video  src={trace} controls></video>
                    
                    <hr className=" p-2 m-2"/>

                    <h2>后端结果分析</h2>
                    <h3>一、上车人数随时间变化的折线图</h3>
                    <img src={passenger_time}></img>
                    <h3>二、出租车一天行驶距离分布</h3>
                    <img src={daily_travel}></img>
                    <h3>三、出租车一天载客次数分布</h3>
                    <img src={number_of_passenger}></img>
                    <h3>四、出租车载客速度分布</h3>
                    <img src={speed_with}></img>
                    <h3>五、出租车空载速度分布</h3>
                    <img src={speed_without}></img>
                    <h3>六、各区出行人数统计及流动情况</h3>
                    <p>District 为上车地点， 后面几列为对应下车地点所在的区</p>
                    <img src={district}></img>
                    <img src={map}></img>

                </div>
			</div>
        )
    }

}

export {Report};