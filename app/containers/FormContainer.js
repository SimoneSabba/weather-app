import React from 'react';
import Form from '../components/form';

var FormContainer = React.createClass({
	
	getInitialState: function () {
	    return { city: '' }
  	},

	onSubmit: function () {
    	console.log('onSubmit')
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