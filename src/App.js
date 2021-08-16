import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from './auth/Auth';
import Home from './components/Home';
import PrivateRoute from "./components/auth/PrivateRoute";
import Start from "./components/Start";
import Login from "./components/auth/Login";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/start" component={Start} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
