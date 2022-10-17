import React from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import Content from './components/Content.jsx'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

function App() {
  return (
     <div id='main' className='app'>
          <Content/>
      </div>
  );
}

export default App;

