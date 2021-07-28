import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../../auth/secret/firebase';
import { AuthContext } from '../../auth/Auth';
import '../../styles/login.css';


const Login = ({ history }) => {

    // fonction pour la connexion
    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app.auth().signInWithEmailAndPassword(email.value, password.value);
                history.push("/")
            } catch (error) {
                alert(error)
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/" />;
    }
    return (
        <>
            <div class="container">
                <form onSubmit={handleLogin}>
                    <div class="row">
                        <div class="col-25">
                            <label for="email">Email*</label>
                        </div>
                        <div class="col-75">
                            <input type="email" id="email" name="email" placeholder="email.." />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="password">Password*</label>
                        </div>
                        <div class="col-75">
                            <input type="password" id="password" name="password" placeholder="mot de passe.." />
                        </div>
                    </div>
                    <div class="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default withRouter(Login);
