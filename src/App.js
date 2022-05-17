import React from "react";
import MapBox from "./components/MapBox";
import {Control, DEFAULT_CONTROL} from "./components/Control"

import ExampleHeatLayer from './components/layers/ExampleHeatLayer'
import CabTripLayer from './components/layers/CabTripLayer'



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'layers': this.generateLayer(DEFAULT_CONTROL)
        };
    }

    generateLayer = (vals) => {
        return [
            ExampleHeatLayer({'visible': vals.enableExampleHeatLayer}),
            CabTripLayer({'visible': vals.enableCabTripLayer, 'current': vals.current})
        ];
    }

    controlChange = (vals) => {
        this.setState({'layers': this.generateLayer(vals)});
    }

    render() {
        return (
            <div>
                <MapBox layers={this.state.layers}></MapBox>
                <Control onChange={(vals) => {this.controlChange(vals)}}></Control>
            </div>
        )
    }
}

export default App;