import React from "react";
import MapBox from "./components/MapBox";
import {Control, DEFAULT_CONTROL} from "./components/Control"

import VehicleTravelLayer from "./components/layers/VehicleTravelLayer";
import GetInClusterLayer from "./components/layers/GetInClusterLayer";
import GetOffClusterLayer from "./components/layers/GetOffClusterLayer";
import { Report } from "./components/Report";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'layers': this.generateLayer(DEFAULT_CONTROL),
            'showReport': false
        };
    }

    generateLayer = (vals) => {
        return [
            VehicleTravelLayer({'visible': vals.enableVehicleTravelLayer, 'current': vals.current}),
            //TODO: pick visible from control panel
            GetInClusterLayer({'visible': true}),
            GetOffClusterLayer({'visible': true})
        ];
    }

    setReportCallback = (show) => {
        this.setState({'showReport': show});
    }

    controlChange = (vals) => {
        this.setState({'layers': this.generateLayer(vals)});
    }

    render() {
        return (
            <div>
                <MapBox layers={this.state.layers}></MapBox>
                <div className="absolute flex flex-row pointer-events-none h-screen min-w-screen">
                    <Control onChange={(vals) => {this.controlChange(vals)}} setReport={this.setReportCallback}></Control>
                    <Report show={this.state.showReport}></Report>
                </div>
            </div>
        )
    }
}

export default App;