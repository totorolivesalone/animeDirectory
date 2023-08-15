import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalcontextProvider } from './context/Globalcontext';
import GlobalStyle from './Globalstyle';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalcontextProvider><App /></GlobalcontextProvider>
    
  </React.StrictMode>
);

