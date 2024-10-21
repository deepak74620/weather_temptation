'use client'
import React, { useEffect, useState } from 'react'

const Location = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [address,setAddress] = useState('')
    const [error, setError] = useState(null);
    async function getAddressFromCoordinates(lat, lon) {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
          const data = await response.json();
      
          if (data && data.display_name) {
            console.log("Address: ", data);
            setAddress(data.display_name)
            return data.display_name;
          } else {
            throw new Error("No address found");
          }
        } catch (error) {
          console.error("Error retrieving address:", error);
        }
      }
      
      
      
  
    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            setError(error.message);
          }
        );
      } else {
        setError("Geolocation not supported by this browser.");
      }
    }, []);

    useEffect(()=>{
      console.log(location)
        if(location.latitude && location.longitude){
            const currAddress = getAddressFromCoordinates(location.latitude, location.longitude);
            // setAddress(currAddress.display_name)
            console.log(currAddress)
        }
    },[location])
  
    return (
      <div>
        <h1>Your Location Info</h1>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <p>
            {address}
          </p>
        )}
      </div>
    );
}

export default Location


