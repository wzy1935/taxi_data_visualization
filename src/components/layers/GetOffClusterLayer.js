import { IconLayer } from '@deck.gl/layers';
import { DataFilterExtension } from '@deck.gl/extensions';

const ICON_MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128, anchorX: 64, anchorY: 128, mask: true }
};

const SAMPLE_DATA = [
    { four_digit_time: 24, coordinates: [113.950516, 22.556232] },
    { four_digit_time: 124, coordinates: [113.947281, 22.5557] },
    { four_digit_time: 223, coordinates: [113.944649, 22.555267] },
    { four_digit_time: 1024, coordinates: [113.941437, 22.555332] },
    { four_digit_time: 1,  coordinates: [113.938515, 22.555468] },
];

function GetOffClusterLayer(props) {
    return new IconLayer({
        id: 'GetOffClusterLayer',
        data: 'http://127.0.0.1:5000/getOffCluster',
        getFilterValue: d => d.four_digit_time,
        filterRange: [100 * parseInt(props.begin / 3600) + parseInt(props.end / 3600), 100 * parseInt(props.begin / 3600) + parseInt(props.end / 3600)],
        extensions: [new DataFilterExtension({ filterSize: 1 })],
        visible: props.visible,
        //TODO begin: customize icons, anchors
        iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
        iconMapping: ICON_MAPPING,
        getIcon: d => 'marker',
        sizeScale: 8,
        getColor: d => [75, 255, 60, 198],
        //TODO end
        getPosition: d => d.coordinates,
        getSize: d => 5,
        pickable: true
    });

}

export default GetOffClusterLayer;