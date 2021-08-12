import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  //  transform the searchResults to object into the
  // { latitude: 37.7577, longitude: -122.4376 }
  //   object
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });
  return (
    <ReactMapGL
      //   className="hidden xl:inline-flex"
      mapStyle="mapbox://styles/mastertecs/cks8iwcst775r18qqdnqrl6iz"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(next) => setViewport(next)}
    >
      {searchResults?.map(({ long, lat, title }, i) => (
        <div className="" key={i}>
          <Marker
            longitude={long}
            latitude={lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation({ lat, long })}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* popup onclick markup */}
          {selectedLocation.long === long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={lat}
              longitude={long}
            >
              {title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
