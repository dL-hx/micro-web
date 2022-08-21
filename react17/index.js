import React from 'react'
import "./index.scss"
import ReactDOM from 'react-dom'
import BasicMap from './src/router';

const render = () => {
  ReactDOM.render(<BasicMap />, document.getElementById('app-react'))
}


render()