import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// context wrap
import Theme from './Context/Theme';
import Register from './Context/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Theme>
        <Register>
          <App />
        </Register>
      </Theme>
    </BrowserRouter>
  </>
);