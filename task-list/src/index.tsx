import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      
        <App />
      
    </BrowserRouter>
    </Provider>
    
 </React.StrictMode> 
);