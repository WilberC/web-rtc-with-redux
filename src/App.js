import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Counter } from './features/counter/Counter';
import { Login } from "./features/user/User";


function App() {
  const routes = [
    { path: "/counter", component: <Counter/> },
    { path: "/", component: <Login/> },
  ]
  return (
    <main className="App w-screen h-screen bg-black-background text-white">
      <Router>
        <Switch>
          {routes.map(({ path,component },i)=>(
            <Route key={i} path={ path }>
              { component }
            </Route>
          ))}
        </Switch>
      </Router>
    </main>
  );
}

export default App;
