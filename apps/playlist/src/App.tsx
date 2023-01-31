import { AppShell } from 'ui';
import React from 'react';
import { PlaylistContent } from 'playlist-content';
import { MoviesContent } from 'movies-content';
import './App.css';

// @ts-ignore
const MoviesContentRuntime = React.lazy(() => import('movies/Movies'));

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch() {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <MoviesContent />;
    }
    return this.props.children;
  }
}

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
            element: () => (
              <ErrorBoundary>
                <MoviesContentRuntime />
              </ErrorBoundary>
            ),
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
