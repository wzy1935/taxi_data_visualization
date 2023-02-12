import React from "react";
import MapBox from "./components/MapBox";
import {Control, DEFAULT_CONTROL} from "./components/Control"

import { Report } from "./components/Report";
import VehicleTravelLayer from "./components/layers/VehicleTravelLayer";
import GetOnClusterLayer from "./components/layers/GetOnClusterLayer";
import GetOffClusterLayer from "./components/layers/GetOffClusterLayer";
import GetOnTaxiLayer from "./components/layers/GetOnTaxiLayer";
import GetOffTaxiLayer from "./components/layers/GetOffTaxiLayer";




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
            GetOnTaxiLayer({'visible':vals.enablePickUpPointLayer,'begin':vals.begin,'end':vals.end}),
            GetOffTaxiLayer({'visible':vals.enableDropOffPointLayer,'begin':vals.begin,'end':vals.end}),
            GetOnClusterLayer({ 'visible': vals.enableGetOnClusterLayer, 'begin': vals.begin, 'end': vals.end}),
            GetOffClusterLayer({ 'visible': vals.enableGetOffClusterLayer, 'begin': vals.begin, 'end': vals.end})
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