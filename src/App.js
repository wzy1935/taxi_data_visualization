import React from "react";
import MapBox from "./components/MapBox";
import {Control, DEFAULT_CONTROL} from "./components/Control"

import ExampleHeatLayer from './components/layers/ExampleHeatLayer'
import CabTripLayer from './components/layers/CabTripLayer'
import GetInTaxiLayer from './components/layers/GetInTaxiLayer'
import GetInTaxiClusterLayer from './components/layers/GetInTaxiClusterLayer'
import GetOffTaxiLayer from './components/layers/GetOffTaxiLayer'
import GetOffTaxiClusterLayer from './components/layers/GetOffTaxiClusterLayer'
import VehicleTravelLayer from "./components/layers/VehicleTravelLayer";
import PeakSectionLayer from "./components/layers/PeakSectionLayer";
import { Report } from "./components/Report";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'layers': this.generateLayer(DEFAULT_CONTROL)
        };
    }

    generateLayer = (vals) => {
        return [
            //ExampleHeatLayer({'visible': vals.enableExampleHeatLayer}),
            //CabTripLayer( {'visible': vals.enableCabTripLayer, 'current': vals.current}),
            GetInTaxiLayer({'visible': vals.enableGetInTaxiLayer, 'current': vals.current}),
            GetInTaxiClusterLayer({'visible': vals.enableGetInTaxiClusterLayer, 'current': vals.current}),
            GetOffTaxiLayer({'visible': vals.enableGetOffTaxiLayer, 'current': vals.current}),
            GetOffTaxiClusterLayer({'visible': vals.enableGetOffTaxiClusterLayer, 'current': vals.current}),
            VehicleTravelLayer({'visible': vals.enableVehicleTravelLayer, 'current': vals.current}),
            PeakSectionLayer({'visible': vals.enablePeakSectionLayer, 'current': vals.current})
        ];
    }

    controlChange = (vals) => {
        this.setState({'layers': this.generateLayer(vals)});
    }

    render() {
        return (
            <div>
                <MapBox layers={this.state.layers}></MapBox>
                <Control onChange={(vals) => {this.controlChange(vals)}} ></Control>
                <Report ></Report>
            </div>
        )
    }
}

export default App;