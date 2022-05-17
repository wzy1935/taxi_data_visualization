import React from "react";

const DEFAULT_CONTROL = {
    begin: 0,
    current: 28800,
    end: 86399,
    enableExampleHeatLayer: false,
    enableCabTripLayer: false
}

class Control extends React.Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_CONTROL;
    }

    onChange = () => {
        this.props.onChange(this.state);
    }

    changeBegin = (event) => {
        let val = Number(event.target.value);
        this.setState({'begin': val}, this.onChange);
    } 

    changeCurrent = (event) => {
        let val = Number(event.target.value);
        this.setState({'current': val}, this.onChange);
    } 

    changeEnd = (event) => {
        let val = Number(event.target.value);
        this.setState({'end': val}, this.onChange);
    }

    changeLayer = (layerName) => {
        let state = {}
        state[layerName] = !this.state[layerName]
        this.setState(state, this.onChange);
    }

    render() {
        return (
            <div className=" absolute p-6 bg-white rounded-md shadow-md left-4 top-4 p-2">
                <button 
                className={" p-2 m-2 rounded-md shadow-md text-white " + (this.state.enableExampleHeatLayer ? " bg-green-600" : "bg-gray-600")}
                onClick={() => {this.changeLayer('enableExampleHeatLayer')}}
                >ExampleHeatLayer</button>
                <button 
                className={" p-2 m-2 rounded-md shadow-md text-white " + (this.state.enableCabTripLayer ? " bg-green-600" : "bg-gray-600")}
                onClick={() => {this.changeLayer('enableCabTripLayer')}}
                >CabTripLayer</button>

                <br/>
                begin <input type="range" name="points" min="0" max="86399" value={this.state.begin} onChange={this.changeBegin}/>
                <br/>
                current <input type="range" name="points" min="0" max="86399" value={this.state.current} onChange={this.changeCurrent}/>
                <br/>
                end <input type="range" name="points" min="0" max="86399" value={this.state.end} onChange={this.changeEnd}/>
            </div>
        )
    }

}

export {Control, DEFAULT_CONTROL};