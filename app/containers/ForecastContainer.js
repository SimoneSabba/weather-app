import React from 'react';
import Forecast from '../components/forecast';
import api from '../helpers/api'

var ForecastContainer = React.createClass({

 	handleForecastData: function(forecastData) {
		this.setState({
			isLoading: false,
			forecastData: forecastData
		});
	},
	
	getInitialState: function () {
	    return {
	      isLoading: true,
	      forecastData: {}
	    }
  	},

  	componentDidMount: function () {
    	api.getForecast(this.state.city).then(this.handleForecastData);
  	},

  	componentWillReceiveProps: function (nextProps) {
    	api.getForecast(this.state.city).then(this.handleForecastData);
  	},

	render: function() {
		return (
			<Forecast 
				city={this.props.routeParams.city}
				isLoading={this.state.isLoading}
				forecastData={this.state.forecastData}
			/> 
	  	);
	}
});

export default ForecastContainer;