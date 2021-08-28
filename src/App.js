import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Global } from "./component/Global";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [listeTodo, setTodo] = useState([]);
  return (
    <Router>
      <Route path="/tache">
        <Global list={listeTodo} execut={setTodo}></Global>
      </Route>
    </Router>
  );
}

export default App;
