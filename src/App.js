import React from 'react';
import Game from './pages/Game/Game';
import { ThemeProvider } from './context/ThemeState';
function App() {
  return (
    <ThemeProvider>
      <Game />
    </ThemeProvider>
  );
}

export default App;
