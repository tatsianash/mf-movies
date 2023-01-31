import { AppShell } from 'ui';
import React from 'react';
import MoviesContent from './MoviesContent';
import './App.css';

function App() {
  return (
    <div>
      <h1>Movies</h1>
      <AppShell
        title="Movies app"
        colorScheme="light"
        navLinks={[
          { label: 'Home', path: '/' },
          { label: 'Playlist', path: '/playlist' },
        ]}
        routes={[
          {
            path: '/',
            element: MoviesContent,
          },
          {
            path: '/playlist',
            element: () => <div>Playlist</div>,
          },
        ]}
      />
    </div>
  );
}

export default App;
