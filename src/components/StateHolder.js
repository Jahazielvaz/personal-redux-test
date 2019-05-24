import React from 'react';

import './main.css'

const StateHolder = (props) => {
  return(
    <div id="state-wrapper">
      <h1>Hello. This is my state</h1>
      <h2>{props.msg}</h2>
    </div>
  )
}

export default StateHolder;
