import React from "react";
import vedio from '../static/trace.mp4'

class Report extends React.Component {


    render() {
        return (
            <div className={" h-screen transition-all p-6 overflow-hidden w-full max-w-screen-lg" + (this.props.show ? " " : " invisible translate-x-10 opacity-0")}>
				<div className="bg-gray-100 shadow-md rounded-lg p-10 pointer-events-auto max-h-full overscroll-none overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">

                    {/* finish your report here... */}
                    <h1 className=" font-bold text-2xl py-2">出租车数据分析报告</h1>
                    <h2 className=" font-bold text-lg py-1">二级段落</h2>
                    <p>视频显示：</p>
                    <video className="aspect-video" src={vedio} autoPlay></video>


                </div>
			</div>
        )
    }

}

export {Report};