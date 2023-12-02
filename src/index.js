import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { NextUIProvider } from "@nextui-org/react";
import { CounterProvider } from './contexts/counter.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <NextUIProvider>
            <CounterProvider>
                <App />
            </CounterProvider>
        </NextUIProvider>
    </BrowserRouter>
    // </React.StrictMode>
);
