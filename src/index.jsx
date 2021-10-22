import * as React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { headerConfig } from './mocks/header-config';

const App = () => <Header config={headerConfig}/>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);;