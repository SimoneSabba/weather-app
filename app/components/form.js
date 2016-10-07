import React from 'react';
var PropTypes = React.PropTypes;

var style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 300,
  alignSelf: 'right'
};

/*
* BUTTON COMPONENT
*/
function Button(props) { 
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-success'
      onClick={props.onSubmit}>
        {props.children}
    </button>
  );
}

/*
* INPUT TYPE COMPONENT
*/
function InputCity(pros) {
  return (
    <input 
      className='form-control'
      placeholder='London, United Kingdom'
      type='text'
      />
    );
}

/*
* FORM COMPONENT
*/
function Form(props) {
  return (
    <div style={style}>
      <InputCity></InputCity>
      <Button
        onSubmit={props.onSubmit}>
        Get Weather
      </Button>
    </div>
  )
}

export default Form;