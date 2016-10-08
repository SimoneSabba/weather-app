import React from 'react';
import FormContainer from '../containers/FormContainer'

var styles = {};
styles.container = {
	width: '100%',
    height: '92%'
};
styles.header = {
	display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
};

var MainContainer = React.createClass({
	render: function() {
		return (
			<div style={styles.container}>
				<div style={styles.header}>
					<h2>Will it rain?</h2>
					<FormContainer />
				</div>
				{this.props.children}
			</div>
		);
	}
});

export default MainContainer;