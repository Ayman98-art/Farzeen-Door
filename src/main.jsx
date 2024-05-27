import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// react-router 
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.jsx';

// react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

// AOS Animation
import 'aos/dist/aos.css';

import { Provider } from 'react-redux';
import { store } from './rtk/Store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
