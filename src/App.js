import React from 'react';
import Game from './pages/Game/Game';
import { ThemeProvider } from './context/ThemeState';
import { Header } from './Components/layout/Header';
import { ChatContainer } from './Components/layout/ChatContainer';

// import WebSocket from 'ws';
function App() {
  return (
    <ThemeProvider>
      <Header />

      <Game />
      <ChatContainer />
    </ThemeProvider>
  );
}

export default App;
