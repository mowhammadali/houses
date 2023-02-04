import React , { useEffect} from 'react';
import L from 'leaflet';
import { MapContainer , TileLayer , Marker , Popup , useMapEvents} from 'react-leaflet';

// import components
import LocationMarker from './LocationMarker';

const Map = () => {
    // useEffect
    useEffect(() => {
        const L = require("leaflet");
        
        delete L.Icon.Default.prototype._getIconUrl;
        
        L.Icon.Default.mergeOptions({
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png')
        });
    }, []);

    return (
        <div className='w-full h-[150px]'>
            <MapContainer
                center={{ lat: 35.699655, lng: 51.337264 }}
                zoom={13}
                scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer>,
        </div>
    );
};

export default Map;