import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App'; // c'est grâce à webpack que l'on peut importer notre composant aussi facilement avec import. Un outil donc particulièrement utile pour lier les fichiers entre eux. 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
