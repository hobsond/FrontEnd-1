import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import {RecoilRoot} from 'recoil'

import Login from './components/Login.js';
import Profile from './components/Profile.js';
import Settings from './components/Settings.js';
import Home from './components/Home.js';
import Playing from './components/Playing.js';
import Favorites from './components/Favorites.js';
import Albums from './components/Albums.js';
import AlbumPage from './components/AlbumPage.js';
import PlayLists from './components/PlayLists.js';
import AppNav from './components/AppNav.js';
import AppSearch from './components/AppSearch.js';
import PlayQueue from './components/PlayQueue.js';
import PrivateRoute from "./components/PrivateRoute";

import {
  dummyFavorites,
  dummyPlaylists,
  dummyPlaylistById,
  dummyPlaylistTracks
} from './utils/dummyData.js';

export default function App() {

  // Data State
  const [dataFavorites, setDataFavorites] = useState(dummyFavorites);
  const [dataPlaylists, setDataPlaylists] = useState(dummyPlaylists);
  const [dataPlaylistById, setDataPlaylistById] = useState(dummyPlaylistById);
  const [dataPlaylistTracks, setDataPlaylistTracks] = useState(dummyPlaylistTracks);

  return (
    <RecoilRoot>
      <div className='App'>
        <Switch>
          <Route path='/login' render={props =>
            <Login />
          } />

          <Route path='/' render={props =>

            <div>
              <PrivateRoute path='/albums' component={Albums} />
              <PrivateRoute path='/playlists' component={PlayLists} />
              <PrivateRoute path='/playing' component={Playing} />
              <PrivateRoute path='/favorites' favorites={dataFavorites} component={Favorites} />
              <PrivateRoute path='/profile' component={Profile} />
              <PrivateRoute path='/settings' component={Settings} />

              <Route path='/albumID123456789'>
                <AlbumPage />
              </Route>

              <Route path='/home'>
                <Home />
              </Route>

              <PlayQueue />
              <footer className="app-footer">
                <AppNav  />
              </footer>
              <AppSearch />

            </div>
          } />
        </Switch>
      </div>
    </RecoilRoot>
  );
}