import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   async function handleSubmit (e) {
       e.preventDefault();
        // Stap 3: Request naar de server met inlog-gegevens
        try {
            const res = await axios.post('http://localhost:3000/register', {
                email,
                password,
                username,
            });
            // Stap 4: Geef de JWT mee aan de login functie
        } catch (e) {
            console.error("Registratie mislukt", e)
        }
        // stap 3.1 maak een asiox request
    }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Emailadres:</label>
            <input id="email" type="email" placeholder="Emailadres" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        </div>
          <div>
          <label htmlFor="username">Gebruikersnaam:</label>
              <input id="username" type="text" placeholder="Username" value={username} onChange={(e) =>setUsername(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="password">Wachtwoord:</label>
            <input id="password" type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
          </div>
          <button type='submit'>Registeren</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;