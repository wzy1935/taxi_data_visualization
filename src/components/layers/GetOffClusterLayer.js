import { IconLayer } from '@deck.gl/layers';

const ICON_MAPPING = {
    marker: { x: 128, y: 0, width: 128, height: 128 }
};

const SAMPLE_DATA = [
    { begin_time: 0, end_time: 24, coordinates: [113.950516, 22.556232] },
    { begin_time: 0, end_time: 24, coordinates: [113.947281, 22.5557] },
    { begin_time: 0, end_time: 24, coordinates: [113.944649, 22.555267] },
    { begin_time: 0, end_time: 24, coordinates: [113.941437, 22.555332] },
    { begin_time: 0, end_time: 24, coordinates: [113.938515, 22.555468] },
];

function GetOffClusterLayer(props) {
    return new IconLayer({
        id: 'GetOffClusterLayer',
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

export default GetOffClusterLayer;