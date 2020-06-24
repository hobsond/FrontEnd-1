import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Login from './components/Login.js';
import Home from './components/Home.js';
import Playing from './components/Playing.js';
import Favorites from './components/Favorites.js';
import Albums from './components/Albums.js';
import PlayLists from './components/PlayLists.js';
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
              <Albums />
            </Route>
            <Route path='/playlists'>
              <PlayLists />
            </Route>
            <Route path='/playing'>
              <Playing />
            </Route>
            <Route path='/favorites'>
              <Favorites />
            </Route>
            <Route path='/home'>
              <Home />
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