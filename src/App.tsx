import React from 'react';
import CreatePostForm from './components/CreatePostForm';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Create Post</h1>
            </header>
            <main className="App-main">
                <CreatePostForm />
            </main>
        </div>
    );
};

export default App;
