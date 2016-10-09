import React from 'react';
import Forecast from '../components/forecast';
import api from '../helpers/api'

var ForecastContainer = React.createClass({
	contextTypes: {
	    router: React.PropTypes.object.isRequired
	},

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
    	api.getForecast(this.props.routeParams.city).then(this.handleForecastData);
  	},

  	componentWillReceiveProps: function (nextProps) {
    	api.getForecast(nextProps.routeParams.city).then(this.handleForecastData);
  	},

  	onClickDay: function (weather) {
	    this.context.router.push({
			pathname: '/detail/' + this.props.routeParams.city,
	      		state: {
	        		weather: weather
	      		}
    	})
  	},

	render: function() {
		return (
			<Forecast 
				city={this.props.routeParams.city}
				isLoading={this.state.isLoading}
				forecastData={this.state.forecastData}
				onClickDay={this.onClickDay}
			/> 
	  	);
	}
});

export default ForecastContainer;