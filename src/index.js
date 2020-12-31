import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, useTheme, Global, css } from '@emotion/react'

import './index.css';
import App from './App';
import { theme } from './shared/themes'

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global styles={css`
      body {
        font-family: ${theme.fontStyles.family};
        font-size: ${theme.fontStyles.size};
      }
    `} />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
