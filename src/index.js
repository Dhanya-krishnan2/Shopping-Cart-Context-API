import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartState from './Components/context/cart/CartState'
// import './bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <CartState>
    <App />

    </CartState>
  </React.StrictMode>,
  document.getElementById('root')
);


