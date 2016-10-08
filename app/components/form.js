import React from 'react';
var PropTypes = React.PropTypes;

/*
* Style
*/
var style = {
  display: 'flex',
  flexDirection: 'row',
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
function InputCity(props) {
  return (
    <input 
      className='form-control'
      placeholder='London, UK'
      type='text'
      value = {props.city}
      onChange = {props.onChange}
      />
    );
}

/*
* FORM COMPONENT
*/
function Form(props) {
  return (
    <div style={style}>
      <InputCity 
        city={props.city}
        onChange={props.onUpdate}>
      </InputCity>
      <Button
        onSubmit={props.onSubmit}>
        Find it out!
      </Button>
    </div>
  )
}

/*
* DEFINING TYPES
*/
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

export default Form;