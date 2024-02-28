import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthProvider';


const element = document.getElementById('root')
const root = ReactDOM.createRoot(element);

root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);

