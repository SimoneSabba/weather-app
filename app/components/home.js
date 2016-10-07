import React from 'react';

var styles = {};

styles.container = {
  backgroundSize: 'cover',
  backgroundImage: "url('app/images/bg.svg')",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%'
  };

styles.header = {
  fontSize: 45,
  color: '#fff',
  fontWeight: 100,
}

function Home(props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter a City, a State or a ZIP code</h1>
    </div>
  )
}

export default Home;