import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Global } from "./component/Global";
import { Detail } from "./component/Detail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [listeTodo, setTodo] = useState([]);

  return (
    <Router>
      <Route exact path="/">
        <Global list={listeTodo} execut={setTodo}></Global>
      </Route>
      <Route path="/detail/:identifient">
        <Detail list={listeTodo}></Detail>
      </Route>
    </Router>
  );
}

export default App;
