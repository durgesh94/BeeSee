import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'

const RootApp: React.FC = () => {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

ReactDOM.render(<RootApp />, document.getElementById('root'));
