import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import './index.css';
import App from './App';

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// context wrap
import Theme from './Context/Theme';
import Users from './Context/Users';
import Houses from './Context/Houses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Theme>
        <Users>
          <Houses>
            <App />
          </Houses>
          <ToastContainer />
        </Users>
      </Theme>
    </BrowserRouter>
  </>
);