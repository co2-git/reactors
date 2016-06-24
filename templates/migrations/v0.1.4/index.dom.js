import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Reactors from 'reactors';

export default function (platform, props = {}) {
  Reactors.platform = platform;
  ReactDOM.render(<App {...props} />, document.getElementById('reactors'));
}
