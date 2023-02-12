import { TripsLayer } from '@deck.gl/geo-layers';

function VehicleTravelLayer(props) {
    return new TripsLayer({
        id: 'VehicleTravelLayer',
        // data: vehicleTravel,
        data: 'https://raw.githubusercontent.com/wzy1935/dm_frontend/master/data/travel.json',
        visible: props.visible,
        getPath: d => d.path,
        getTimestamps: d => d.timestamps,
        getColor: [251, 207, 232],
        opacity: 0.8,
        widthMinPixels: 2,
        rounded: true,
        trailLength: 500,
        currentTime: props.current * 60,
        getPolygonOffset: ({layerIndex}) => [-99, -99]
    });
}

export default VehicleTravelLayer;