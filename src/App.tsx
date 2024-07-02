import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToggleComponent, PreviousComponent } from "./hooks/components";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Перевірка</h1>
            <ToggleComponent />
            <hr />
            <PreviousComponent />
        </div>
    );
};

export default App;
