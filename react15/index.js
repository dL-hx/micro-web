import React from 'react'
import ReactDOM from 'react-dom'
// import BasicMap from './src/router/index.jsx';
import BasicMap from './src/router/index1.jsx';
import "./index.scss"

const render = () => {
  ReactDOM.render((
    <BasicMap />
  ), document.getElementById('app-react'))
}
render()