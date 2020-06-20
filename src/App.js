import React from 'react';
import './App.scss';

import AppNav from './components/AppNav.js';
import AppSearch from './components/AppSearch.js';
import PlayQueue from './components/PlayQueue.js';

function App() {
  return (
    <div className='App'>

      <PlayQueue />
      <footer className="app-footer">
        <AppNav />
      </footer>
      <AppSearch />
    </div>
  );
}

export default App;