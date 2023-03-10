import { AppShell } from 'ui';
import React from 'react';
import { MoviesContent } from 'movies-content';
import { PlaylistContent } from 'playlist-content';
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
            element: PlaylistContent,
          },
        ]}
      />
    </div>
  );
}

export default App;
