import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(() => {
  return [
    { id: 0, name: '줌X 인빈서블런 플라이니트', quan: 1, price: '200000'},
    { id: 1, name: '줌X 인빈서블런 2', quan: 2, price: '230000'},
    { id: 2, name: '줌X 인빈서블런 플라이니트4', quan: 1, price: '240000'},
  ]
 })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
