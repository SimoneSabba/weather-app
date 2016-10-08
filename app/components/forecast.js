import React from 'react';

function Forecast(props) {

  return (
  	props.isLoading 
  		? <div>Loading...</div> 
  		: <div>My comp {props.city}</div>
    
  )
}

export default Forecast;