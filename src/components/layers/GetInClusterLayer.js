import { IconLayer } from '@deck.gl/layers';

const ICON_MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128 }
};

const SAMPLE_DATA = [
    { begin_time: 0, end_time: 24, coordinates: [113.975182, 22.556667] },
    { begin_time: 0, end_time: 24, coordinates: [113.972099, 22.55695] },
    { begin_time: 0, end_time: 24, coordinates: [113.959984, 22.556566] },
    { begin_time: 0, end_time: 24, coordinates: [113.957001, 22.556482] },
    { begin_time: 0, end_time: 24, coordinates: [113.953568, 22.5564] },
];

function GetInClusterLayer(props) {
    return new IconLayer({
        id: 'GetInClusterLayer',
        //TODO: pick begin time and end time from control panel
        data: SAMPLE_DATA,
        visible: props.visible,
        //TODO begin: customize icons, anchors
        iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
        iconMapping: ICON_MAPPING,
        getIcon: d => 'marker',
        sizeScale: 15,
        //TODO end
        getPosition: d => d.coordinates,
        getSize: d => 5,
    });

}

export default GetInClusterLayer;