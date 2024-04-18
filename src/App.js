import React from 'react';
import './App.css';

import Login from './screens/Login';
import HomePage from './screens/Home';

const isAuthenticated = localStorage.getItem("signUp");

function App() {
  return (
    <div className="App">
      <main>
        {!isAuthenticated ? <Login /> : <HomePage />}
      </main>
    </div>
  );
}

export default App;
