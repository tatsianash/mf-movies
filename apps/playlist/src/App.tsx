import { AppShell } from 'ui';
import React from 'react';
import { MoviesContent } from 'movies-content';
import { PlaylistContent } from 'playlist-content';
import './App.css';

function App() {
  return (
    <div>
      <h1>Playlist</h1>
      <AppShell
        title="Playlist app"
        colorScheme="dark"
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
            element: PlaylistContent,
          },
        ]}
      />
    </div>
  );
}

export default App;
