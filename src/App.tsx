import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { Router } from './routes';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
      <BrowserRouter>
        <Router />

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
