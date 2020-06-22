import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Login from './components/Login.js';
import AppNav from './components/AppNav.js';
import AppSearch from './components/AppSearch.js';
import PlayQueue from './components/PlayQueue.js';

export default function App() {

  return (
    <div className='App'>
      <Switch>
        <Route path='/login' render={props =>
          <Login />
        } />

        <Route path='/' render={props =>
          <div>
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
            <Route path='/home'>
              this is home page
            </Route>
            <PlayQueue />
            <footer className="app-footer">
              <AppNav />
            </footer>
            <AppSearch />
          </div>
        } />
      </Switch>
    </div>
  );
}