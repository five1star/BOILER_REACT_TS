import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './GlobalStyles';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyled />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
