import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

export const initialState = {
  isDark: false,
  theme: { ...light },
};

export default (state, action) => {
  switch (action.type) {
    case 'SWITCH_THEME':
      const theme = state.isDark ? { ...light } : { ...dark };

      document.documentElement.style.setProperty(
        '--background',
        theme.background
      );
      document.documentElement.style.setProperty(
        '--font-color',
        theme.fontcolor
      );

      return { ...state, theme: theme, isDark: !state.isDark };

    default:
      return state;
  }
};
