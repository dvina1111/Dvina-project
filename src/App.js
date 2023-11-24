import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
} from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
function App() {
  const user = null
  return (
    <div className="app">
      
      <Router>
{!user ? (
  <LoginScreen/>
):(

        <HashRouter>
          <Route exact path="/">
      <HomeScreen/>

          </Route>
        </HashRouter>
)}
      </Router>
    </div>
  );
}

export default App;