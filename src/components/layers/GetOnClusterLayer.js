import { IconLayer } from '@deck.gl/layers';
import { DataFilterExtension } from '@deck.gl/extensions';

const ICON_MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128, anchorX: 64, anchorY: 128, mask: true }
};

function GetOnClusterLayer(props) {
    return new IconLayer({
        id: 'GetInClusterLayer',
        data: 'https://raw.githubusercontent.com/wzy1935/dm_frontend/master/data/get_on_cluster.json',
        getFilterValue: d => d.four_digit_time,
        filterRange: [100 * parseInt(props.begin / 60) + parseInt(props.end / 60), 100 * parseInt(props.begin / 60) + parseInt(props.end / 60)],
        extensions: [new DataFilterExtension({ filterSize: 1 })],
        visible: props.visible,
        iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
        iconMapping: ICON_MAPPING,
        getIcon: d => 'marker',
        sizeScale: 8,
        getColor: d => [59, 130, 246],
        getPosition: d => d.coordinates,
        getSize: d => 5,
        pickable: true
    });

}

export default GetOnClusterLayer;