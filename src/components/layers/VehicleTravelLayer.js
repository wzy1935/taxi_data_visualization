import { TripsLayer } from '@deck.gl/geo-layers';

function VehicleTravelLayer(props) {
    return new TripsLayer({
        id: 'VehicleTravelLayer',
        // data: vehicleTravel,
        data: 'http://127.0.0.1:5000/vehicleTravel',
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