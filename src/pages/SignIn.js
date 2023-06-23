import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function SignIn() {
    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        // Stap 3: Request naar de server met inlog-gegevens
        try {
            const res = await axios.post('http://localhost:3000/login', {
                email,
                password,
            });
            console.log(res)
            console.log(res.data.accessToken)
            // Stap 4: Geef de JWT mee aan de login functie
            login(res.data.accessToken)
        } catch (e) {
            console.error("Login mislukt", e)
        }
        // stap 3.1 maak een asiox request
    }


    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Emailadres:</label>
                        <input id="email" type="email" placeholder="Emailadres" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                    </div>
                <div>
                    <label htmlFor="password">Wachtwoord:</label>
                    <input id="password" type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                </div>
                <button type="submit">Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;