import { ThemeContext } from './ThemeContext';
import { oasisTheme } from '../styles/theme';

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={oasisTheme}>
      {children}
    </ThemeContext.Provider>
  );
}
