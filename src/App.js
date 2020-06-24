import React, { useState } from 'react';
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
import PrivateRoute from "./components/PrivateRoute";


export default function App() {
  // Song Playing
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(true);
  function playAudio() {
    document.getElementById('audioPlayer').play();
    document.getElementById('playButton').classList.add('uk-hidden');
    document.getElementById('pauseButton').classList.remove('uk-hidden');
    setPlaying(true);
    setPaused(false);
  }
  // Song Paused
  function pauseAudio() {
    document.getElementById('audioPlayer').pause();
    document.getElementById('pauseButton').classList.add('uk-hidden');
    document.getElementById('playButton').classList.remove('uk-hidden');
    setPlaying(false);
    setPaused(true);
  }


  return (
    <div className='App'>
      <Switch>
        <Route path='/login' render={props =>
          <Login />
        } />

        <Route path='/' render={props =>

          <div>
            <PrivateRoute path='/albums' component={Albums} />
            <PrivateRoute path='/playlists' component={PlayLists} />
            <PrivateRoute path='/playing'>
              <Playing paused={paused} playing={playing} />
            </PrivateRoute>
            {/* <Playing paused={paused} playing={playing} />
            </PrivateRoute> */}

            <PrivateRoute path='/favorites' component={Favorites} />

            <Route path='/home'>
              <Home />
            </Route>

            <PlayQueue />
            <footer className="app-footer">
              <AppNav playAudio={playAudio} pauseAudio={pauseAudio} />
            </footer>
            <AppSearch />

          </div>
        } />
      </Switch>
    </div>
  );
}