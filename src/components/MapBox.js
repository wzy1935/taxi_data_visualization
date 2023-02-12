import React from 'react';
import DeckGL from '@deck.gl/react';
import {Map} from 'react-map-gl';

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN


const INITIAL_VIEW_STATE = {
    longitude: 114.029001,
    latitude: 22.505218,
    zoom: 11,
    pitch: 20,
    bearing: 20
};


function MapBox(props) {
    const layers = props.layers;
        return (
            <div className=" w-96">
                <DeckGL
                    initialViewState={INITIAL_VIEW_STATE}
                    controller={true}
                    layers={layers}
                    getTooltip={({ object }) => object && `${object.address}\n`}
                    width='101%'
                    height='101%'
                >
                    { <Map

                    mapStyle="mapbox://styles/mapbox/dark-v10"
                    attributionControl={false}
                    mapboxAccessToken={MAPBOX_ACCESS_TOKEN}/> }
            </DeckGL>
        </div>

    );
}

export default MapBox;