import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.scss';

import AppNav from './components/AppNav.js';
import AppSearch from './components/AppSearch.js';
import PlayQueue from './components/PlayQueue.js';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/albums'>
          this is albums page
        </Route>
        <Route path='/playlists'>
          this is playlists page
        </Route>
        <Route path='/playing'>
          this is playing page
        </Route>
        <Route path='/favorites'>
          this is favorites page
        </Route>
        <Route path='/'>
          this is home page
        </Route>
      </Switch>

      <PlayQueue />
      <footer className="app-footer">
        <AppNav />
      </footer>
      <AppSearch />
    </div>
  );
}

export default App;