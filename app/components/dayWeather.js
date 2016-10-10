import React from 'react';
import utils from '../helpers/utils';

var styles = {};

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

function DayWeather(props) {
  let date = utils.formatDate(props.day.dt);
  let icon = props.day.weather[0].icon;
  let iconUrl = utils.getIconPath(icon);

  return (
    <div style={styles.dayContainer} onClick={props.onClickDay}>
      <img style={styles.weather} src={iconUrl} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  )
}

export default DayWeather;