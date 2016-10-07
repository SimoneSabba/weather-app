import React from 'react';

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }
};

var MainContainer = React.createClass({
	render: function() {
		return (
			<div style={styles.container}>
				{this.props.children}
			</div>
		);
	}
});

export default MainContainer;