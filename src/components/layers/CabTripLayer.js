import {TripsLayer} from '@deck.gl/geo-layers';

function CabTripLayer(data, currentTime) {
    return new TripsLayer({
        id: 'CabTripLayer',
        data: data,
        getPath: d => d.waypoints.map(p => p.coordinates),
        getTimestamps: d => d.waypoints.map(p => p.timestamp - 1554772579000),
        getColor: [253, 128, 93],
        opacity: 0.8,
        widthMinPixels: 5,
        rounded: true,
        fadeTrail: true,
        trailLength: 200,
        currentTime: currentTime
    });
}

export default CabTripLayer;