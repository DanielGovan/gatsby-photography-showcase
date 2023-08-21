import React from 'react';
import { Map as MapBoxMap, Marker } from 'react-map-gl';

import useDetectScroll from '../../hooks/useDetectScroll';

import 'mapbox-gl/dist/mapbox-gl.css';

export interface MapBlockProps {
  showMarker?: boolean;
  latitude: number;
  longitude: number;
  zoom: number;
  maxZoom?: number;
  minZoom?: number;
}

export const StudioMap = ({
  showMarker = true,
  latitude,
  longitude,
  zoom,
  maxZoom = 18,
  minZoom = 8,
}: MapBlockProps) => {
  const [scrollDir] = useDetectScroll({});

  return (
    <MapBoxMap
      scrollZoom={scrollDir === 'still' ? true : false}
      maxZoom={maxZoom}
      minZoom={minZoom}
      initialViewState={{
        latitude: latitude,
        longitude: longitude,
        zoom: zoom,
      }}
      style={{
        width: '100%',
        height: '100%',
        maxHeight: '45vh',
        minHeight: '400px',
        overflow: 'hidden',
      }}
      mapStyle="mapbox://styles/dangovan/clbf157we000x14t8f8j8iyx0"
      mapboxAccessToken="pk.eyJ1IjoiZGFuZ292YW4iLCJhIjoiY2w4eDU1eG9yMDM2ZTNvcXZ5dmhkbmU4NSJ9.Otsv51lb7u7TqxqaK9bgVA"
    >
      {showMarker && (
        <Marker latitude={latitude} longitude={longitude} anchor="bottom" color="red" />
      )}
    </MapBoxMap>
  );
};
