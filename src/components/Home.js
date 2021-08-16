import React from 'react';
import app from '../auth/secret/firebase';
import { Link, Route, Switch } from 'react-router-dom';
import Start from './Start';
import axios from 'axios';
// import "Fuse" from 'fuse.js';

const Home = () => {
    return (
        <Switch>
            <Route path="/">
                <h1>Page d'acceuil</h1>
                <Link to="/start">Plus ...</Link>
                <button onClick={() => app.auth().signOut()}>Déconnexion</button>
            </Route>
            <Route path="/start">
                <Start />
            </Route>
        </Switch>
    )
}

export default Home;
