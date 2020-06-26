import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import { RecoilRoot } from 'recoil'

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
import PlayListPage from './components/PlayListPage.js';
import {
  dummyFavorites,
  dummyPlaylists,
  dummyPlaylistById,
  dummyPlaylistTracks
} from './utils/dummyData.js';
import { axiosWithAuth } from './utils/axiosWithAuth';
import axios from 'axios';

export default function App() {

  // Data State
  const [dataFavorites, setDataFavorites] = useState(dummyFavorites);
  const [dataPlaylists, setDataPlaylists] = useState(dummyPlaylists);
  const [dataPlaylistById, setDataPlaylistById] = useState(dummyPlaylistById);
  const [dataPlaylistTracks, setDataPlaylistTracks] = useState(dummyPlaylistTracks);
  const [currentSong, setCurrentSong] = useState();
  const [artistPage, setArtistPage] = useState();
  const [albumPage, setAlbumPage] = useState();
  const [playQueue, setPlayQueue] = useState();
  const [albums, setAlbums] = useState();
  const [user, setUser] = useState();

  useEffect(()=> {
    axios
    .post( `https://bw3-ds.herokuapp.com/predict_all`, {"trackid" : "3RjtoLl66MHWOOlV0w0g9s"})
    .then( (res) => console.log(res) )
    .catch( (err) => console.log(err) )
    
    axios
      .post( `https://bw3-ds.herokuapp.com/track`, {"trackid" : "3RjtoLl66MHWOOlV0w0g9s"})
      .then( (res) => console.log(res) )
      .catch( (err) => console.log(err) )
    
  }, []);
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

              <PrivateRoute path='/playing' component={Playing} />
              <PrivateRoute path='/favorites' favorites={dataFavorites} component={Favorites} />
              <PrivateRoute path='/profile' component={Profile} />
              <PrivateRoute path='/settings' component={Settings} />

              <PrivateRoute path='/currentPlaylist' playlist={dataPlaylistTracks} component={PlayListPage} />
              <PrivateRoute path='/playlists' playlists={dataPlaylists} component={PlayLists} />
              <PrivateRoute path='/albumID123456789' component={AlbumPage} />
              <PrivateRoute exact path='/' component={Home} />

              <PlayQueue />
              <footer className="app-footer">
                <AppNav />
              </footer>
              <AppSearch />

            </div>
          } />
        </Switch>
      </div>
    </RecoilRoot>
  );
}