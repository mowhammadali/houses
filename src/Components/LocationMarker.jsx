import React , { useState , useContext, useEffect} from "react"
import { Popup , Marker , useMapEvents} from "react-leaflet"

// import Context
import { CoordinatesContext } from "../Pages/SetAds"

function LocationMarker() {
    // use context
    const { setCoordinates } = useContext(CoordinatesContext);

    // use state
    const [position, setPosition] = useState(null)
    
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
    },
    })  

    const handleCoordinates = () => {
        setCoordinates(position);
    }

    useEffect(() => {
        handleCoordinates();
    } , [position])
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
}

export default LocationMarker;