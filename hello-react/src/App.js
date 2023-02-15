import React from 'react';

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'pink'
  }
  return (
    <>
      <h1>hello React</h1>
      <h2 style={style}>{name}</h2>
      {name === 'react' && <h1>react!!</h1>}
      {undefined ?? <h1>react!!</h1>}
    </>
  );
}

export default App;
