import { MapContainer, TileLayer, Marker, Popup } from 'leaflet';

const Map = ({ locationInfo }) => {
    return (
        <>
            <MapContainer center={{lat: locationInfo.location.lat,lng: locationInfo.location.lng}} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {locationInfo && (
                    <Marker position={{lat: locationInfo.location.lat,lng: locationInfo.location.lng}}>
                        <Popup>
                            <p>IP Address: {locationInfo.ip}</p>
                            <p>Location: {locationInfo.location.city}, {locationInfo.location.country}</p>
                            <p>Timezone: {locationInfo.location.timezone}</p>
                            <p>ISP: {locationInfo.isp}</p>
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        </>
    );
};

export default Map;