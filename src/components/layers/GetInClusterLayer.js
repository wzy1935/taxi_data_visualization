import { IconLayer } from '@deck.gl/layers';
import { DataFilterExtension } from '@deck.gl/extensions';

const ICON_MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128, anchorX: 64, anchorY: 128, mask: true }
};

const SAMPLE_DATA = [
    { four_digit_time: 24, coordinates: [113.975182, 22.556667] },
    { four_digit_time: 124, coordinates: [113.972099, 22.55695] },
    { four_digit_time: 223, coordinates: [113.959984, 22.556566] },
    { four_digit_time: 1024, coordinates: [113.957001, 22.556482] },
    { four_digit_time: 1, coordinates: [113.953568, 22.5564] },
];

function GetInClusterLayer(props) {
    return new IconLayer({
        id: 'GetInClusterLayer',
        data: SAMPLE_DATA,
        getFilterValue: d => d.four_digit_time,
        filterRange: [100 * parseInt(props.begin / 3600) + parseInt(props.end / 3600), 100 * parseInt(props.begin / 3600) + parseInt(props.end / 3600)],
        extensions: [new DataFilterExtension({ filterSize: 1 })],
        visible: props.visible,
        //TODO begin: customize icons, anchors
        iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
        iconMapping: ICON_MAPPING,
        getIcon: d => 'marker',
        sizeScale: 8,
        getColor: d => [60, 250, 255, 198],
        //TODO end
        getPosition: d => d.coordinates,
        getSize: d => 5,
        pickable: true
    });

}

export default GetInClusterLayer;