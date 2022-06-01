import { TripsLayer } from '@deck.gl/geo-layers';
import layer_data from '../../static/data/output5_std.json'




function VehicleTravelLayer(props) {
    return new TripsLayer({
        id: 'VehicleTravelLayer',
        // data: vehicleTravelData,
        data: layer_data,
        visible: props.visible,
        getPath: d => d.waypoints.map(p => p.coordinates),
        // deduct start timestamp from each data point to avoid overflow
        getTimestamps: d => d.waypoints.map(p => p.timestamp),
        getColor: [253, 128, 93],
        widthMinPixels: 5,
        fadeTrail: true,
        trailLength: 2000,
        currentTime: props.current * 60
    });
}

export default VehicleTravelLayer;