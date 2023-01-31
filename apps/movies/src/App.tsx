import { AppShell } from 'ui';
import React from 'react';
// import { Button } from 'ui';

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
            element: () => <div>Home</div>,
          },
          {
            path: '/playlist',
            element: () => <div>Playlist</div>,
          },
        ]}
      />
      {/* <Button /> */}
    </div>
  );
}

export default App;
