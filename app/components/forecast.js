import React from 'react';
import utils from '../helpers/utils';
import DayWeather from '../components/dayWeather';

var PropTypes = React.PropTypes;

/*
* Define component css style
*/
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

function ForecastUI(props) {
	return(
		<div>
			<h1 style={styles.header}> {props.city}</h1>
			<div style={styles.container}>
        		{props.forecastData.list.map(function (listItem) {
	          	return <DayWeather 
                        key={listItem.dt} 
                        day={listItem} 
                        onClickDay={props.onClickDay.bind(null, listItem)}
                      />
	        })}
      </div>
		</div>
	)
}

function Forecast(props) {

  return (
  	props.isLoading 
  		? <h1 style={styles.header}> Loading... </h1>
  		: <ForecastUI 
          city={props.city}
          forecastData={props.forecastData.data}
          onClickDay={props.onClickDay}
        />
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default Forecast;