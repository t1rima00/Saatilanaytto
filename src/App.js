import './App.css';
import React from 'react';
import Weather from './weather';

import {useState,useEffect} from 'react';





function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading,setIsLoading] = useState (false);

  useEffect(() =>  {
    if(navigator.geolocation){
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false);
      },(error)=>{
        alert(error);
      })
    }
    else{
      alert('Your browser does not support geolocating!')
    }
      }, [])
    
  

 if (isLoading) {
  return <p class='Lataus'> Loading, please wait... If the page isn't loading, grant access to your location </p>
 }
 else {
  return (
    <div className="content">
      <h3>Your position</h3>
      <p>
        Position:&nbsp;
        {lat.toFixed(3)},
        {lng.toFixed(3)}
      </p>
      <Weather lat = {lat} lng={lng}/>
    </div>
  );
 }
}

export default App;
