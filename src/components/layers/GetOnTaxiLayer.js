import {ScatterplotLayer} from '@deck.gl/layers';
import {DataFilterExtension} from '@deck.gl/extensions';


function GetOnTaxiLayer(props) {
    return new ScatterplotLayer({
        id: 'GetOnTaxiLayer',
        data: 'https://raw.githubusercontent.com/wzy1935/dm_frontend/master/data/get_on.json',
        visible:props.visible,
        opacity: 0.2,
        filled: true,
        radiusScale: 6,
        radiusMinPixels: 1,
        radiusMaxPixels: 10,
        getPosition: d => d.coordinates,
        getRadius: 4,
        getFillColor: [59, 130, 246],
        getFilterValue: d => d.timestamp,
        pickable: false,
        filterRange: [props.begin * 60, props.end * 60],
        extensions: [new DataFilterExtension({filterSize: 1})]
    })
}


export default GetOnTaxiLayer;