import React from 'react';
import Detail from '../components/detail';

var DetailContainer = React.createClass({
  render: function() {
    
    return (
      <Detail 
      	weather={this.props.location.state.weather}
        city={this.props.routeParams.city}
    	/>
    );
  }

});

export default DetailContainer;