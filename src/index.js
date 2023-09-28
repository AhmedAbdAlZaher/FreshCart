import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./styles.css"
import CounterContextProvider from './context/countercontext';
import TokenContextProvider from './context/tokenContext';
import { QueryClient, QueryClientProvider } from 'react-query';
const root = ReactDOM.createRoot(document.getElementById('root'));

let query= new QueryClient()


root.render(
    <QueryClientProvider client={query}>
    <TokenContextProvider>
        <CounterContextProvider>
            <App />
        </CounterContextProvider>
  </TokenContextProvider>
  </QueryClientProvider>
);

