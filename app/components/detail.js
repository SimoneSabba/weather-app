import React from 'react';
import utils from '../helpers/utils';
import DayWeather from '../components/dayWeather';

var styles = {};

styles.container = {
	fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
    textTransform: 'capitalize'
};

function Detail (props) {
	var temp = {
		min: utils.kelvinToCelsius(props.weather.temp.min),
		max: utils.kelvinToCelsius(props.weather.temp.max)
	}
	
	return (
		<div style={styles.container}>
		  <DayWeather day={props.weather}/>
		  <div style={styles.descriptionContainer}>
		    <p>{props.city}</p>
		    <p>{props.weather.weather[0].description}</p>
		    <p>min temp: {temp.min} degrees</p>
		    <p>max temp: {temp.max} degrees</p>
		    <p>humidity: {props.weather.humidity}</p>
		  </div>
		</div>
	)
}

export default Detail;