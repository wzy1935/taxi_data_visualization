import React from "react";
import MapBox from "./components/MapBox";
import Control from "./components/Control"

import StartDotLayer from './components/layers/StartDotLayer'
import CabTripLayer from './components/layers/CabTripLayer'

const LINE_DATA = [
    {'COORDINATES': [113.929001,22.555218], 'WEIGHT': 10},
    {'COORDINATES': [113.93789699999999,22.542633], 'WEIGHT': 10},
    {'COORDINATES': [113.94236799999999,22.542717], 'WEIGHT': 10},
    {'COORDINATES': [113.961281,22.562267000000002], 'WEIGHT': 10}
]

const TRIP_DATA = []



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'layers': [CabTripLayer(TRIP_DATA, 0)]
        };
    }

    updateConfig = () => {
        let layers = [];
        // layers.push();
        // this.setState({'layers': layers});

    }

    setValue = (val) => {
        console.log(val);
        this.setState({'layers': [CabTripLayer(TRIP_DATA, val)]})
    }

    render() {
        return (
            <div>
                <MapBox layers={this.state.layers}></MapBox>
                <Control cb={this.updateConfig} onChange={(event) => {this.setValue(event.target.value)}}></Control>
            </div>
        )
    }
}

export default App;