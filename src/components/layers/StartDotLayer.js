import {HeatmapLayer} from '@deck.gl/aggregation-layers';

function StartDotLayer(data) {
    return new HeatmapLayer({
        id: 'StartDotLayer',
        data: data,
        getPosition: d => d.COORDINATES,
        getWeight: d => d.WEIGHT,
        aggregation: 'SUM'
    })
}

export default StartDotLayer;