import {HeatmapLayer} from '@deck.gl/aggregation-layers';

const SAMPLE_DATA = [
    {'COORDINATES': [113.929001,22.555218], 'WEIGHT': 2},
    {'COORDINATES': [113.93789699999999,22.542633], 'WEIGHT': 2},
    {'COORDINATES': [113.94236799999999,22.542717], 'WEIGHT': 2},
    {'COORDINATES': [113.961281,22.562267000000002], 'WEIGHT': 5}
]

function ExampleHeatLayer(props) {
    return new HeatmapLayer({
        id: 'StartDotLayer',
        data: SAMPLE_DATA,
        visible: props.visible,
        getPosition: d => d.COORDINATES,
        getWeight: d => d.WEIGHT,
        aggregation: 'SUM'
    })
}

export default ExampleHeatLayer;