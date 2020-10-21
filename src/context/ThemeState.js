import React, { useReducer, createContext } from 'react';
import ThemeReducer, { initialState } from './reducers/ThemeReducer';
import { ThemeProvider as StyledTheme } from 'styled-components';

export const ThemeContext = createContext(initialState);

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  function switchTheme() {
    dispatch({ type: 'SWITCH_THEME' });
  }

  return (
    <ThemeContext.Provider value={{ switchTheme, ...state }}>
      <StyledTheme theme={state.theme}>{children}</StyledTheme>
    </ThemeContext.Provider>
  );
}
