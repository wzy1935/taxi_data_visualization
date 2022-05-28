import {ScatterplotLayer} from '@deck.gl/layers';
import {DataFilterExtension} from '@deck.gl/extensions';


const SAMPLE_DATA = [
    { timestamp: 0, coordinates: [113.975182, 22.556667] },
    { timestamp: 12000, coordinates: [113.972099, 22.55695] },
    { timestamp: 86400, coordinates: [113.959984, 22.556566] },
    { timestamp: 1577832611000, coordinates: [113.957001, 22.556482] },
    { timestamp: 1577832626000, coordinates: [113.953568, 22.5564] },
    { timestamp: 1577832641000, coordinates: [113.950516, 22.556232] },
    { timestamp: 1577832656000, coordinates: [113.947281, 22.5557] },
    { timestamp: 1577832671000, coordinates: [113.944649, 22.555267] },
    { timestamp: 1577832686000, coordinates: [113.941437, 22.555332] },
    { timestamp: 1577832701000, coordinates: [113.938515, 22.555468] },
    { timestamp: 1577832746000, coordinates: [113.929001, 22.555218] },
    { timestamp: 1577832776000, coordinates: [113.922852, 22.555517] },
    { timestamp: 1577832806000, coordinates: [113.916664, 22.55555] },
    { timestamp: 1577832851000, coordinates: [113.908852, 22.551617] },
    { timestamp: 1577832866000, coordinates: [113.906036, 22.54995] },
    { timestamp: 1577832926000, coordinates: [113.899101, 22.549917] },
    { timestamp: 1577832941000, coordinates: [113.897285, 22.551666] },
    { timestamp: 1577832956000, coordinates: [113.89563, 22.553368] },
    { timestamp: 1577832971000, coordinates: [113.895103, 22.554283] },
    { timestamp: 1577833001000, coordinates: [113.895081, 22.55405] },
    { timestamp: 1577833031000, coordinates: [113.895035, 22.553932] },
    { timestamp: 1577833091000, coordinates: [113.891281, 22.551149] },
    { timestamp: 1577833106000, coordinates: [113.890221, 22.550234] },
    { timestamp: 1577833227000, coordinates: [113.887016, 22.547518] },
    { timestamp: 1577833300000, coordinates: [113.88707, 22.547466] },
    { timestamp: 1577833302000, coordinates: [113.887047, 22.547466] },
    { timestamp: 1577833347000, coordinates: [113.887016, 22.547483] },
    { timestamp: 1577833362000, coordinates: [113.887016, 22.547501] },
    { timestamp: 1577833422000, coordinates: [113.887016, 22.547483] },
    { timestamp: 1577833827000, coordinates: [113.886971, 22.547501] },
    { timestamp: 1577834127000, coordinates: [113.887016, 22.547518] },
    { timestamp: 1577834427000, coordinates: [113.887001, 22.547501] },
    { timestamp: 1577835327000, coordinates: [113.887032, 22.547483] },
    { timestamp: 1577835927000, coordinates: [113.887032, 22.547483] },
    { timestamp: 1577836227000, coordinates: [113.887032, 22.547501] },
    { timestamp: 1577837127000, coordinates: [113.88707, 22.547501] },
    { timestamp: 1577838927000, coordinates: [113.88707, 22.547501] },
    { timestamp: 1577839827000, coordinates: [113.887047, 22.547449] },
    { timestamp: 1577840427000, coordinates: [113.887032, 22.547466] },
    { timestamp: 1577840727000, coordinates: [113.887032, 22.547466] },
    { timestamp: 1577841027000, coordinates: [113.88707, 22.547449] },
]


function GetonTaxiLayer(props) {
    return new ScatterplotLayer({
        id: 'pick-up-layer',
        // data: /api/layers/GetoffTaxiLayer,
        data:SAMPLE_DATA,
        visible:props.visible,
        pickable: true,
        opacity: 0.8,
        stroked: true,
        filled: true,
        radiusScale: 6,
        radiusMinPixels: 1,
        radiusMaxPixels: 100,
        lineWidthMinPixels: 1,
        getPosition: d => d.coordinates,
        getRadius: d =>20,
        getFillColor: d => [255, 0, 0],
        getLineColor: d => [0, 0, 0],
        getFilterValue: d => d.timestamp,
        filterRange: [props.begin, props.end],
        extensions: [new DataFilterExtension({filterSize: 1})]
    })
}


export default GetonTaxiLayer;