import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/Homepage">Home  </Link>
            <Link to="/ToDoList"> ToDo list </Link>
            <Link to="/AddToDo"> Add Todo</Link>
          </nav>
        </div>
      </Router>
    </div>
  );
}

export default App;
