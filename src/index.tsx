import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App'

const RootApp: React.FC = () => {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

const rootElement = document.getElementById('root');

if (rootElement) {
    createRoot(rootElement).render(<RootApp />);
} else {
    throw new Error("Root element 'root' not found in the document.");
}
