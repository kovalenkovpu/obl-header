import * as React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { headerConfig } from './mocks/header-config';

import classes from './App.module.scss';

const App = () => (
  <>
    <h1 className={classes.h1}>
      Header implementation example
    </h1>
    <Header config={headerConfig}/>
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);;