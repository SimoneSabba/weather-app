import React from 'react';
import Form from '../components/form';

var FormContainer = React.createClass({

	onSubmit: function () {
    	console.log('onSubmit')
  	},

	render: function() {
		return <Form onSubmit={this.onSubmit}/>
	}
});

export default FormContainer;