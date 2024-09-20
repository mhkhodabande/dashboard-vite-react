import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { faIR } from '@mui/material/locale';
import './styles/index.css';

// Create RTL cache for Emotion
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Create the MUI theme
const theme = createTheme(
  {
    direction: 'rtl',
    typography: {
      fontFamily: `"IRANSans", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
  },
  faIR // Apply Farsi (Persian) locale
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);
