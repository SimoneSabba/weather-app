import React from 'react';
import Form from '../components/form';
import api from '../helpers/api'

var FormContainer = React.createClass({
	
	contextTypes: {
    	router: React.PropTypes.object.isRequired
  	},

	getInitialState: function () {
	    return { city: '' }
  	},

	onSubmit: function (e) {
		e.preventDefault();
		this.context.router.push('/forecast/' + this.state.city)
  	},

  	onUpdate: function (e) {
    	this.setState({
	      city: e.target.value
	    })
  	},

	render: function() {
		return (
			<Form 
				onSubmit={this.onSubmit}
				city={this.state.city}
				onUpdate={this.onUpdate}
		  	/>
	  	);
	}
});




export default FormContainer;