import {ScatterplotLayer} from '@deck.gl/layers';
import {DataFilterExtension} from '@deck.gl/extensions';


function GetoffTaxiLayer(props) {
    return new ScatterplotLayer({
        id: 'get-off-layer',
        data: 'http://127.0.0.1:5000/getOffTaxi',
        visible:props.visible,
        opacity: 0.2,
        filled: true,
        radiusScale: 6,
        radiusMinPixels: 1,
        radiusMaxPixels: 10,
        getPosition: d => d.coordinates,
        getRadius: 4,
        getFillColor: [245, 158, 11],
        getFilterValue: d => d.timestamp,
        pickable: false,
        filterRange: [props.begin * 60, props.end * 60],
        extensions: [new DataFilterExtension({filterSize: 1})]
    })
}

export default GetoffTaxiLayer;