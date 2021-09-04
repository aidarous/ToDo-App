import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Homepage from './components/Homepage';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Homepage />
        <div>
          <nav>
            <Link to="/Homepage">Home  </Link>
            <Link to="/ToDoList"> ToDo list </Link>
            <Link to="/AddToDo"> Add Todo</Link>
          </nav>
        </div>

        <Switch>
          <Route path='/Home'>
            <Homepage />
          </Route>
          <Route path='/ToDoList'>
            <ToDoList />
          </Route>
          <Route path='/AddToDo'>
            <AddToDo />
          </Route>
        </Switch>
     
      
    </div>
    </Router>
  );
}

export default App;
