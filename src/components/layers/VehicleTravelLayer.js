import { TripsLayer } from '@deck.gl/geo-layers';


// function VehicleTravelLayer(props) {
//     return new TripsLayer({
//         id: 'VehicleTravelLayer',
//         data: vehicleTravel,
//         // data: SAMPLE_DATA,
//         visible: props.visible,
//         getPath: d => d.waypoints.map(p => p.coordinates),
//         // deduct start timestamp from each data point to avoid overflow
//         getTimestamps: d => d.waypoints.map(p => p.timestamp - 1382371200000),
//         getColor: [253, 128, 93],
//         widthMinPixels: 5,
//         fadeTrail: true,
//         trailLength: 2000,
//         currentTime: props.current
//     });
// }

function VehicleTravelLayer(props) {
    return new TripsLayer({
        id: 'VehicleTravelLayer',
        // data: vehicleTravel,
        data: 'http://127.0.0.1:5000/vehicleTravel',
        visible: props.visible,
        getPath: d => d.path,
        getTimestamps: d => d.timestamps,
        getColor: [253, 128, 93],
        opacity: 0.3,
        widthMinPixels: 2,
        rounded: true,
        trailLength: 2000,
        currentTime: props.current * 60
    });
}

export default VehicleTravelLayer;