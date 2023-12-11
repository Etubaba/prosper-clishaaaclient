import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import english_trnas from './translations/en/translations.json';
import germany_trnas from './translations/de/translations.json';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: true },
  lng: 'en',
  resources: {
    en: {
      global: english_trnas,
    },
    de: {
      global: germany_trnas,
    },
  },
});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();