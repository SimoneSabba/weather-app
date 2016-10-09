import React from 'react';
import utils from '../helpers/utils';

var styles = {};

styles.header = {
	fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    textTransform: 'capitalize'
}

styles.container = {
	display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
}

styles.dayContainer = {
	display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
}

styles.weather = {
	cursor: 'pointer',
	height: 130
}

styles.subheader = {
	cursor: 'pointer',
	fontSize: 30,
    color: '#333',
    fontWeight: 100
}

function DayWeather (props) {
  let date = utils.formatDate(props.day.dt);
  let icon = props.day.weather[0].icon;
  let iconUrl = utils.getIconPath(icon);

  return (
    <div style={styles.dayContainer}>
      <img style={styles.weather} src={iconUrl} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  )
}

function ForecastUI(props) {
	return(
		<div>
			<h1 style={styles.header}> {props.city}</h1>
			<div style={styles.container}>
        		{props.forecastData.list.map(function (listItem) {
	          	return <DayWeather key={listItem.dt} day={listItem} />
	        })}
      </div>
		</div>
	)
}

function Forecast(props) {

  return (
  	props.isLoading 
  		? <h1 style={styles.header}> Loading... </h1>
  		: <ForecastUI city={props.city} forecastData={props.forecastData.data} />
  )
}

export default Forecast;