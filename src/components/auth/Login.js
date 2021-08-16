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
    console.log('login',currentUser)
    if (currentUser) {
        return <Redirect to="/" />;
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleLogin}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="email">Email*</label>
                        </div>
                        <div className="col-75">
                            <input defaultValue="shekinahnzinga@yahoo.fr" type="email" id="email" name="email" placeholder="email.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="password">Password*</label>
                        </div>
                        <div className="col-75">
                            <input defaultValue="123456789" type="password" id="password" name="password" placeholder="mot de passe.." />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default withRouter(Login);


// const handleSubmit = useCallback(
//     async (event) => {
//     event.preventDefault();
//     try {
//         setError('');
//         setLoading(true);
//         if (emailRef && passwordRef) {
//             dispatch(isLoadingCaisseLiaison())
//             dispatch(isLoadingTaux())
//             dispatch(isLoadingStockFlash())
//             dispatch(isLoadingCaisseData())
//             dispatch(isLoadingCompteFlashNonServie())
//             await login(emailRef.current.value, passwordRef.current.value);
//         }
//         /* if(allowedUsers !== OKAPI_SYS_ADMIN){
//             setError('Utilisateur non reconnu');
//         }else{
//             setError(null); 
//         } */
//     }
//     catch {
//         setError('Email ou Mot de passe incorrect');
//     }
//     setLoading(false);
// },[history])